import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <p>How are you jillas??</p>
            <small>timestamp</small>
        </div>
    )
}

export default Message
