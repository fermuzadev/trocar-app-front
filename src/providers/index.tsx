import type { FC, PropsWithChildren, JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
    return <BrowserRouter>{children}</BrowserRouter>;
};
