import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./message/messageSlice";

export const store = configureStore({
    reducer: {
        messages: messageSlice,
    },
});

// Path: app\javascript\redux\message\messageSlice.js