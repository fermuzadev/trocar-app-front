// src/store/chatSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  count: number;
}

const initialState: ChatState = {
  count: 0,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment } = chatSlice.actions;

export const selectCount = (state: { chat: ChatState }) => state.chat.count;

export default chatSlice.reducer;
