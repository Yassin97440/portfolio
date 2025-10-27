import { permissionStore } from '../store/permissionStore';
import type { Permission, PermissionGroup } from '../types/permissions';

export function usePermissions() {
    const checkPermission = (permission: Permission): boolean => {
        return permissionStore.hasPermission(permission);
    };

    const checkAnyPermission = (permissions: Permission[]): boolean => {
        return permissionStore.hasAnyPermission(permissions);
    };

    const checkAllPermissions = (permissions: Permission[]): boolean => {
        return permissionStore.hasAllPermissions(permissions);
    };

    const addPermissionGroup = (group: PermissionGroup): void => {
        permissionStore.addPermissionGroup(group);
    };

    const setUserPermissions = (permissions: Permission[]): void => {
        permissionStore.setUserPermissions(permissions);
    };

    return {
        checkPermission,
        checkAnyPermission,
        checkAllPermissions,
        addPermissionGroup,
        setUserPermissions
    };
} 