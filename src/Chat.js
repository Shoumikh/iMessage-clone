import React, { useState } from "react";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";

function Chat() {
  const [input, setInput] = useState();
  const sendMessage = (e) => {
    e.preventDefault(); //prevents from reloading the page

    //firebase works

    setInput(""); //set the input to nothing after sending message
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__channelName">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* chat body */}
      <div className="chat__messages">
        <h2>I am jilla</h2>
      </div>

      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
