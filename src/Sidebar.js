import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import db, { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChatId, selectChatName, setChat } from "./features/chatSlice";

function Sidebar() {
  const user = useSelector(selectUser); //importing the state
  const [chats, setChats] = useState([]); //a local state array for collecting chats
  const dispatch = useDispatch();

  //as soon as the sidebar component loads
  //creating a db of collection
  //onSnapshot => realtime listener which gives us the
  //snapshot of the database whenever anything changes
  //whenever anything in the database changes as it is continiously listening
  //we are changing setChat state
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  //hadles signout
  const handleClick = () => {
    auth.signOut(); //handles sign out
  };

  //adds chat name to the database and redux store
  const addChat = () => {
    const chatName = prompt("Please Enter chat name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          onClick={handleClick}
          src={user.photo}
          className="sidebar__avatar"
        />

        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="search" type="text" />
        </div>
        <IconButton varrient="outlined" className="sidebar__inputButton">
          <RateReviewOutlinedIcon onClick={addChat} />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {/* for everty single chat in the chats array 
          one StatebarChat componenthas been called */}
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
