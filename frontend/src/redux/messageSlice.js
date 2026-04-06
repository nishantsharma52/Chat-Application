import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [], // Null ki jagah [] (empty array) rakhna better hai taaki filter error na aaye
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        // Naya reducer message delete karne ke liye
        deleteMessage: (state, action) => {
            const messageId = action.payload;
            // Filter karke wo message hata do jiski ID match ho rahi hai
            state.messages = state.messages.filter((msg) => msg._id !== messageId);
        }
    }
});

export const { setMessages, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;