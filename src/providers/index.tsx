import type { FC, PropsWithChildren, JSX } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  store  from '../store/index';
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
    return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>;
};
