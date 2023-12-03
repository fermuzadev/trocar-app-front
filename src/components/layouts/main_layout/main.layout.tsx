import type { FC, PropsWithChildren, JSX } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return <div className="">{children}</div>;
};
