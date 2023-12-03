/**
 * URL Base para las rutas de autenticación.
 */
export const BASE_URL_AUTH_API = '/auth';

/**
 * Enumeración de las distintas rutas de la api de autenticación.
 */
export enum AUTH_API_ROUTES {
    'login' = '/token',
    'register' = '/signup',
    'logout' = '/logout',
}
