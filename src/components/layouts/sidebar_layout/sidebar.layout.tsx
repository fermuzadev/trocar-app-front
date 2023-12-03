import { type FC, type PropsWithChildren, type JSX } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Link } from 'react-router-dom';
import { toggleSidebar } from './store/slice/sidebarSlice';

import TrocarLogo from './assets/Logo.svg?url';
import CollapseIcon from './assets/Collapse.svg?url';
import HomeIcon from './assets/home.svg?url';
import BoxIcon from './assets/box.svg?url';
import ListIcon from './assets/file-text.svg?url';
import NotifyIcon from './assets/bell.svg';
import SupportIcon from './assets/help-circle.svg';
import ConfigIcon from './assets/settings.svg';
import MoreIcon from './assets/more-vertical.svg';

import './styles.css';

export const SidebarLayout: FC<PropsWithChildren> = (): JSX.Element => {
    const dispatch = useDispatch();

    const toggleCard = useSelector(
        (state: RootState) => state.sidebar.toggleCard
    );
    const scaleSidebar = useSelector(
        (state: RootState) => state.sidebar.scaleSidebar
    );
    const displayNone = useSelector(
        (state: RootState) => state.sidebar.displayNone
    );
    const moveIcons = useSelector(
        (state: RootState) => state.sidebar.moveIcons
    );
    const moveLogo = useSelector((state: RootState) => state.sidebar.moveLogo);
    const centerItem = useSelector(
        (state: RootState) => state.sidebar.centerItem
    );
    const userStatusColor = useSelector(
        (state: RootState) => state.sidebar.userStatusColor
    );

    return (
        <div
            className={`h-screen sticky left-0 bg-color-sidebar flex flex-col  ${scaleSidebar}`}
        >
            <div className={`flex ${moveLogo} justify-between`}>
                <Link to={'/'} className={`flex ${moveIcons} `}>
                    <img src={TrocarLogo} alt="Trocar Logo" />
                    <h1 className={`mx-3 font-bold ${displayNone}`}>Trocar</h1>
                </Link>
                <img
                    className={`cursor-pointer ${moveIcons}`}
                    src={CollapseIcon}
                    alt="Collapse sidebar"
                    onClick={() => dispatch(toggleSidebar())}
                />
            </div>
            <div className="flex flex-col h-full justify-between my-8">
                <div className="flex flex-col justify-center">
                    <Link
                        to={'/'}
                        className={`flex rounded-md bg-color-sidebar-button ${moveIcons}`}
                    >
                        <img src={HomeIcon} alt="Home icon" />
                        <p className={`ml-4 font-semibold ${displayNone}`}>
                            Home
                        </p>
                    </Link>
                    <Link
                        to={'/transactions'}
                        className={`flex rounded-md bg-color-sidebar-button ${moveIcons}`}
                    >
                        <img src={BoxIcon} alt="Home icon" />
                        <p className={`ml-4 font-semibold ${displayNone}`}>
                            Intercambios
                        </p>
                    </Link>
                    <Link
                        to={'/whish-list'}
                        className={`flex rounded-md bg-color-sidebar-button ${moveIcons}`}
                    >
                        <img src={ListIcon} alt="Home icon" />
                        <p className={`ml-4 font-semibold ${displayNone}`}>
                            Lista de deseos
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link
                        to={'/notifications'}
                        className={`flex rounded-md bg-color-sidebar-button ${moveIcons} ${centerItem}`}
                    >
                        <div className={`flex `}>
                            <img src={NotifyIcon} alt="Home icon" />
                            <p className={`ml-4 font-semibold ${displayNone}`}>
                                Notificaciones
                            </p>
                        </div>
                        <div
                            className={`py-1 px-2 text-xs font-bold rounded-sm bg-color-sidebar-notify ${displayNone}`}
                        >
                            5
                        </div>
                    </Link>
                    <Link
                        to={'/support'}
                        className={`flex rounded-md bg-color-sidebar-button ${moveIcons}`}
                    >
                        <img src={SupportIcon} alt="Home icon" />
                        <p className={`ml-4 font-semibold ${displayNone}`}>
                            Soporte
                        </p>
                    </Link>
                    <Link
                        to={'/configurations'}
                        className={`flex rounded-md bg-color-sidebar-button ${moveIcons}`}
                    >
                        <img src={ConfigIcon} alt="Home icon" />
                        <p className={`ml-4 font-semibold ${displayNone}`}>
                            Configuración
                        </p>
                    </Link>
                    {toggleCard ? (
                        <div
                            className={`flex justify-between py-6 px-4 mt-8 rounded-md bg-color-sidebar-user-card `}
                        >
                            <Link
                                to={'/user-profile'}
                                className="flex  items-center"
                            >
                                <div className="h-8 w-8 bg-gray-500 rounded-full">
                                    <div
                                        className={`w-2 h-2 rounded-full bg-green-500 ${userStatusColor}`}
                                    ></div>{' '}
                                    {/* user profile img */}
                                </div>
                                <div className="flex flex-col ml-4 ">
                                    <p className={`font-medium ${displayNone}`}>
                                        Nombre de Usuario
                                    </p>
                                    <p
                                        className={`text-xs text-gray-400 ${displayNone}`}
                                    >
                                        usuario@mail.com
                                    </p>
                                </div>
                            </Link>
                            <img
                                src={MoreIcon}
                                alt="More options icon"
                                className={`cursor-pointer ${displayNone}`}
                            />
                        </div>
                    ) : (
                        <Link
                            to={'/user-profile'}
                            className="flex  justify-center"
                        >
                            <div className="h-8 w-8 mt-8 bg-gray-500 rounded-full">
                                <div
                                    className={`w-2 h-2 rounded-full bg-green-500 ${userStatusColor}`}
                                ></div>
                                {/* user profile img */}
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
