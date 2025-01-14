export const PERMISSIONS = {
    // Permissions utilisateur
    USER: {
        CREATE: 'user:create',
        READ: 'user:read',
        UPDATE: 'user:update',
        DELETE: 'user:delete'
    },
    // Permissions projet
    PROJECT: {
        CREATE: 'project:create',
        READ: 'project:read',
        UPDATE: 'project:update',
        DELETE: 'project:delete'
    },
    // Permissions administrateur
    ADMIN: {
        ACCESS_DASHBOARD: 'admin:dashboard',
        MANAGE_USERS: 'admin:manage_users',
        MANAGE_SETTINGS: 'admin:settings'
    }
} as const; 