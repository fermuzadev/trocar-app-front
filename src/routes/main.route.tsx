import type { FC, JSX } from 'react';
import { Route } from 'react-router-dom';

import { MainLayout } from '../components';

export const MainRoute: FC = (): JSX.Element => {
    return <Route path="/" element={<MainLayout />} />;
};
