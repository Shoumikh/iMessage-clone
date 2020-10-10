import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Imessage from "./Imessage";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser); //this will import user from userSlice
  const dispatch = useDispatch(); //for dispathing the value in the data layer

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
       if(authUser){
        //user is logged in
      }else{
        //user is logged out
      }
    }
     )
  }, []);
  return <div className="App">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
