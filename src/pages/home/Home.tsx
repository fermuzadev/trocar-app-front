// src/pages/home/Home.tsx
import React from 'react';

import { HomeHeader } from './components/index';

const Home: React.FC = () => {
    // const homeData = useHomeData();

    return (
        <div className="h-screen w-full p-14">
            <HomeHeader></HomeHeader>
        </div>
    );
};

export default Home;
