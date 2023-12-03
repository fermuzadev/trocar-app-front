import type { FC, JSX } from 'react';
import { Route } from 'react-router-dom';

import { AuthLayout } from '../components';

/**
 * Rutas de autenticación de la app.
 *
 * @returns { JSX.Element } Rutas de autenticación de la app.
 */
export const AuthRoutes: FC = (): JSX.Element => {
    return (
        <Route element={<AuthLayout />}>
            <Route path="/register" element={<>Register</>} />
            <Route path="/login" element={<>Login</>} />
        </Route>
    );
};
