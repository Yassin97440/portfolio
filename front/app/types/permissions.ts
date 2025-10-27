export type Permission = string;

export interface PermissionGroup {
    name: string;
    permissions: Permission[];
}

export interface UserPermissions {
    userId: string;
    permissions: Permission[];
}

export type PermissionCheck = (permission: Permission) => boolean; 