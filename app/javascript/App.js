import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Message from "./components/message";

const App = () => {
    return (
        <Provider store={store}>
        <>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Message />} />
            </Routes>
        </BrowserRouter>
        </>
        </Provider>
    );
};

export default App;