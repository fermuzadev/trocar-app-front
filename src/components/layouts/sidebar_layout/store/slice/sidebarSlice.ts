import { createSlice } from '@reduxjs/toolkit';

export interface SidebarState {
    toggleSidebar: boolean;
    scaleSidebar: string;
    displayNone: string;
    moveIcons: string;
    moveLogo: string;
    centerItem: string;
    toggleCard: boolean;
    userStatusColor: string;
}

const initialState: SidebarState = {
    toggleSidebar: false,
    scaleSidebar: 'w-80 py-10 px-9',
    displayNone: '',
    moveIcons: 'p-4',
    moveLogo: '',
    centerItem: 'justify-between',
    toggleCard: false,
    userStatusColor: '',
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.toggleSidebar = !state.toggleSidebar;
            state.toggleCard = !state.toggleCard;
            if (state.toggleSidebar) {
                state.scaleSidebar = 'w-16 p-3';
                state.displayNone = 'hidden';
                state.moveIcons = 'justify-center p-0 mt-6';
                state.moveLogo = 'flex-col';
                state.centerItem = 'justify-center';
                state.userStatusColor = '';
            } else {
                state.scaleSidebar = 'w-80 py-10 px-9';
                state.displayNone = '';
                state.moveIcons = 'p-4';
                state.moveLogo = '';
                state.centerItem = 'justify-between';
                state.userStatusColor = '';
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
