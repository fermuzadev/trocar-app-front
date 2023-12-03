import React from 'react';
import categoryIcon from '../assets/icons/category.svg';

const Filter: React.FC = () => {
    // logica del filtro

    return (
        <>
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    <img
                        src={categoryIcon}
                        alt="Category all logo"
                        className="hover:bg-white"
                    />
                    <p className="text-sm ">Todo</p>
                </div>
                <p className="text-sm cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    Recientes
                </p>
                <p className="text-sm cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    Baño
                </p>
                <p className="text-sm cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    Cocina
                </p>
                <p className="text-sm cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    Ropa
                </p>
                <p className="text-sm cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    Servicios
                </p>
                <p className="text-sm cursor-pointer border border-gray-100 rounded-lg py-2 px-4 hover:bg-black hover:text-white">
                    Vehículos
                </p>
            </div>
        </>
    );
};

export default Filter;
