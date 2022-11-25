import AppContext from "./AppContext";
import React, { useState } from "react";

export default function AppState(props) {
  let [loggedIn, setLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  return (
    <AppContext.Provider
      value={{ loggedIn,setLoggedIn,user,setUser }}
    >
      {props.children}
    </AppContext.Provider>
  );

}