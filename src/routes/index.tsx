import type { FC, JSX } from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import ChatPage from '../pages/chat/ChatPage';
/**
 * Componente donde se centralizan todas las rutas de la aplicación..
 *
 * @returns { JSX.Element } Rutas centralizadas de la aplicación.
 */
export const Routes: FC = (): JSX.Element => {
    return (
        <Router>
            <Route path="/register" element={<>Register</>} />
            <Route path="/login" element={<>Login</>} />
            <Route element={<>Layout</>}>
                <Route path="/" element={<>Home</>} />
                <Route path="/chat" element={<ChatPage/>} />
            </Route>
            <Route path="*" element={<>Page Not Found</>} />
        </Router>
    );
};
