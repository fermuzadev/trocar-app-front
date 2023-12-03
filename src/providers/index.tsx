import type { FC, PropsWithChildren, JSX } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../store';

/**
 * Componente donde se centralizan los proveedores de la aplicación.
 *
 * @param { PropsWithChildren } param0
 *
 * @returns { JSX.Element } Proveedores de la aplicación.
 */
export const Providers: FC<PropsWithChildren> = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};
