import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Message.css";

function Message({
  id,
  contents: { timestamp, displayName, uid, photo, email, message },
}) {
  const user = useSelector(selectUser);
  return (
    <div className={`message ${user.email === email && "message__sender"}`}>
      {/* checks whether user email is equal to email that comes in
     as props who inserted the message if so then sets classname to message__sender */}
      <Avatar className="message__photo" src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
}

export default Message;
