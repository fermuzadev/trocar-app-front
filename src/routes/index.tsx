import type { FC, JSX } from 'react';
import { Routes as AppRouter, Route } from 'react-router-dom';

// import { AuthRoutes } from '../pages/auth/routes';

// import { MainRoute } from './main.route';
// import { MainLayout } from '../components';
import { SidebarLayout } from '../components/layouts/sidebar_layout';
import { Home } from '../pages';

/**
 * Componente donde se centralizan todas las rutas de la aplicación..
 *
 * @returns { JSX.Element } Rutas centralizadas de la aplicación.
 */
export const Routes: FC = (): JSX.Element => {
    return (
        <div className="flex">
            <SidebarLayout></SidebarLayout>
            <AppRouter>
                {/* <AuthRoutes /> */}
                <Route path="/" element={<Home></Home>} />

                {/* <Route path="/" element={<MainLayout></MainLayout>}></Route> */}
                <Route path="*" element={<>Page Not Found</>} />
            </AppRouter>
        </div>
    );
};
