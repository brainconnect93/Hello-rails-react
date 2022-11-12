import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "api/v1/messages";

export const fetchMessages = createAsyncThunk(
    "messages/fetchMessages",
    async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const messageSlice = createSlice({
    name: "messages",
    initialState: [],
    reducers: {
        addMessage(state, action) {
            state.push(action.payload);
        },
    },

    extraReducers: {
        [fetchMessages.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.push(action.payload);
            console.log(state);
        },
    },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
    