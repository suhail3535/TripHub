import React, { useEffect, useState } from "react";
import { createContext } from "react";

// 1
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState(null);

  const toggle = () => {
    setIsAuth(!isAuth);
  };

  const loginUser = (Name) => {
    setIsAuth(true);
    console.log("LOGIN USER RUNNING APP CONTEXT");
    setUserName(Name);
    // console.log(Name)
  };

  const logoutUser = () => {
    setIsAuth(false);
    setUserName(null);
    console.log(isAuth, userName);
  };

  // console.log(userName)

  return (
  
      <AppContext.Provider
        value={{
          userName,
          isAuth,
          toggle,
          loginUser,
          logoutUser,
        }}
      >
        {children}
      </AppContext.Provider>
    
  );
};

export default AppContextProvider;
