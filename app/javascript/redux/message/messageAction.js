import { createSlice, createAsyncThunk } from "reduxjs/toolkit";

const baseUrl = "api/v1/messages";

export const fetchMessages = createAsyncThunk(
    "messages/fetchMessages",
    async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    }
);