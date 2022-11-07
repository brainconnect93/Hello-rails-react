
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/message/messageSlice";

const Message = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.messages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <>
        <div>
            <h2>Refresh this page to see new message</h2>
            <ul>
                {message.map((Message) => (
                    <li key={Message.id}>{Message.message}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default Message;