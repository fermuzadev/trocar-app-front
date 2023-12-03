// src/pages/home/Home.tsx
import React from 'react';

import filterIcon from '../assets/icons/Filter.svg?url';
import searchIcon from '../assets/icons/Iconly.svg?url';
import Filter from './Filter';

const HomeHeader: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-xs">Hola, bienvenido👋</p>
                    <p className="text-sm font-bold">Usuario nuevo</p>
                </div>
                <div className="flex items-center gap-3 ">
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                </div>
            </div>
            <div className="flex flex-col gap-5 p-10">
                <div className="flex justify-between gap-11">
                    <label
                        htmlFor="search"
                        className="relative w-full text-gray-400 focus-within:text-gray-600 block"
                    >
                        <img
                            src={searchIcon}
                            alt="Search input"
                            className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3"
                        />
                        <input
                            name="search"
                            type="text"
                            placeholder="buscar..."
                            className="shadow appearance-none border rounded-lg w-full pl-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </label>
                    <button className=" p-2 border border-gray-700 rounded-xl">
                        {' '}
                        <img src={filterIcon} alt="buton filter" />
                    </button>
                </div>
                <Filter></Filter>
            </div>
        </>
    );
};

export default HomeHeader;
