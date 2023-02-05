import React, { useState } from "react";
import { useEffect } from "react";

export const SignInContext = React.createContext({
  signedIn: false,
  setSignedIn: () => {},
});

const MainContext = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setSignedIn(true);
  }, []);

  return <SignInContext.Provider value={{ signedIn, setSignedIn }}>{children}</SignInContext.Provider>;
};

export default MainContext;
