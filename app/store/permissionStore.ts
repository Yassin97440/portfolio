import { reactive } from 'vue';
import type { Permission, PermissionGroup } from '../types/permissions';

interface PermissionState {
    userPermissions: Permission[];
    permissionGroups: PermissionGroup[];
}

const state = reactive<PermissionState>({
    userPermissions: [],
    permissionGroups: []
});

export const permissionStore = {
    state,

    setUserPermissions(permissions: Permission[]) {
        state.userPermissions = permissions;
    },

    addPermissionGroup(group: PermissionGroup) {
        state.permissionGroups.push(group);
    },

    hasPermission(permission: Permission): boolean {
        return state.userPermissions.includes(permission);
    },

    hasAnyPermission(permissions: Permission[]): boolean {
        return permissions.some(permission => this.hasPermission(permission));
    },

    hasAllPermissions(permissions: Permission[]): boolean {
        return permissions.every(permission => this.hasPermission(permission));
    }
}; 