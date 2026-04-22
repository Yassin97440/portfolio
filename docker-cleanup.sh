#!/bin/bash
# docker-cleanup.sh
# Supprime les anciennes images Docker inutilisées
# tout en conservant la dernière version de chaque image (même si elle ne tourne pas)
#
# Usage:
#   ./docker-cleanup.sh              # mode dry-run par défaut (sécurité)
#   ./docker-cleanup.sh --execute    # suppression effective
#   ./docker-cleanup.sh --help

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

EXECUTE=false

case "${1:-}" in
    --execute) EXECUTE=true ;;
    --help|-h)
        echo "Usage: $0 [--execute]"
        echo ""
        echo "  Sans argument : affiche ce qui serait supprimé (dry-run)"
        echo "  --execute     : supprime réellement les images"
        exit 0
        ;;
    "") ;;
    *) echo "Option inconnue: $1. Utilisez --help."; exit 1 ;;
esac

if [[ "$EXECUTE" == false ]]; then
    echo -e "${YELLOW}${BOLD}[DRY RUN]${NC} Aucune image ne sera supprimée. Utilisez ${BOLD}--execute${NC} pour supprimer.\n"
fi

# -- 1. Images actuellement utilisées par des containers (actifs ou stoppés) --
declare -A used_ids
while IFS= read -r id; do
    [[ -n "$id" ]] && used_ids["$id"]=1
done < <(docker ps -a --format '{{.Image}}' | xargs -r -I{} docker inspect --format '{{.Id}}' {} 2>/dev/null)

# -- 2. Pour chaque repo, trouver le tag le plus récent (tri par version) --
declare -A latest_tag_per_repo

while IFS='|' read -r repo tag _; do
    [[ "$repo" == "<none>" || "$tag" == "<none>" ]] && continue
    current_latest="${latest_tag_per_repo[$repo]:-}"
    if [[ -z "$current_latest" ]]; then
        latest_tag_per_repo["$repo"]="$tag"
    else
        winner=$(printf '%s\n%s\n' "$current_latest" "$tag" | sort -V | tail -1)
        latest_tag_per_repo["$repo"]="$winner"
    fi
done < <(docker image ls --format '{{.Repository}}|{{.Tag}}|{{.ID}}')

# -- 3. Parcourir toutes les images et décider du sort de chacune --
to_remove=()
kept_latest=0
kept_used=0
total=0

echo -e "${BOLD}Analyse des images Docker...${NC}\n"

while IFS='|' read -r repo tag img_id size; do
    [[ "$repo" == "<none>" ]] && continue
    ((total++)) || true
    full_ref="$repo:$tag"

    full_id=$(docker inspect --format '{{.Id}}' "$full_ref" 2>/dev/null || true)

    if [[ "${latest_tag_per_repo[$repo]:-}" == "$tag" ]]; then
        echo -e "  ${GREEN}GARDÉ${NC}  (dernière version)    ${CYAN}$full_ref${NC}  [$size]"
        ((kept_latest++)) || true
        continue
    fi

    if [[ -n "$full_id" && -n "${used_ids[$full_id]:-}" ]]; then
        echo -e "  ${GREEN}GARDÉ${NC}  (utilisé par container) ${CYAN}$full_ref${NC}  [$size]"
        ((kept_used++)) || true
        continue
    fi

    echo -e "  ${RED}SUPPR${NC}  (ancienne version)     ${CYAN}$full_ref${NC}  [$size]"
    to_remove+=("$full_ref")
done < <(docker image ls --format '{{.Repository}}|{{.Tag}}|{{.ID}}|{{.Size}}')

# -- 4. Images dangling (<none>:<none>) --
dangling_ids=()
while IFS= read -r did; do
    [[ -n "$did" ]] && dangling_ids+=("$did")
done < <(docker images -f "dangling=true" -q 2>/dev/null)

if [[ ${#dangling_ids[@]} -gt 0 ]]; then
    echo -e "\n  ${RED}SUPPR${NC}  ${#dangling_ids[@]} image(s) dangling (sans tag)"
fi

# -- 5. Résumé --
echo -e "\n${BOLD}══════════════════════════════════════${NC}"
echo -e "  Images analysées         : $total"
echo -e "  ${GREEN}Gardées (dernière version) : $kept_latest${NC}"
echo -e "  ${GREEN}Gardées (en utilisation)   : $kept_used${NC}"
echo -e "  ${RED}À supprimer (anciennes)   : ${#to_remove[@]}${NC}"
echo -e "  ${RED}À supprimer (dangling)    : ${#dangling_ids[@]}${NC}"
echo -e "${BOLD}══════════════════════════════════════${NC}"

if [[ ${#to_remove[@]} -eq 0 && ${#dangling_ids[@]} -eq 0 ]]; then
    echo -e "\n${GREEN}Rien à nettoyer !${NC}"
    exit 0
fi

if [[ "$EXECUTE" == false ]]; then
    echo -e "\n${YELLOW}Pour supprimer ces images, relancez avec :${NC}"
    echo -e "  ${BOLD}$0 --execute${NC}\n"
    exit 0
fi

# -- 6. Suppression effective --
echo ""
errors=0

for img in "${to_remove[@]}"; do
    if docker rmi "$img" > /dev/null 2>&1; then
        echo -e "  ${GREEN}✓${NC} $img"
    else
        echo -e "  ${RED}✗${NC} $img (peut-être encore référencée)"
        ((errors++)) || true
    fi
done

if [[ ${#dangling_ids[@]} -gt 0 ]]; then
    docker image prune -f > /dev/null 2>&1
    echo -e "  ${GREEN}✓${NC} Images dangling supprimées"
fi

freed=$(echo "${to_remove[@]}" | wc -w)
echo -e "\n${GREEN}${BOLD}Nettoyage terminé.${NC} $freed image(s) traitée(s), $errors erreur(s)."
