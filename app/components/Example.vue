<template>
    <div>
        <button v-if="checkPermission(PERMISSIONS.PROJECT.CREATE)">
            Créer un projet
        </button>

        <div v-if="checkAllPermissions([
            PERMISSIONS.ADMIN.ACCESS_DASHBOARD,
            PERMISSIONS.ADMIN.MANAGE_USERS
        ])">
            Section admin
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePermissions } from '~/composables/usePermissions';
import { PERMISSIONS } from '~/constants/permissions';

const { checkPermission, checkAllPermissions } = usePermissions();

// Exemple d'initialisation des permissions utilisateur
const initializePermissions = () => {
    const { setUserPermissions } = usePermissions();
    setUserPermissions([
        PERMISSIONS.PROJECT.READ,
        PERMISSIONS.PROJECT.CREATE,
        PERMISSIONS.USER.READ
    ]);
};
</script>