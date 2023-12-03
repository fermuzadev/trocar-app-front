import type { FC, PropsWithChildren, JSX } from 'react';

export const AuthLayout: FC<PropsWithChildren> = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return <div>{children}</div>;
};
