import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AppContext);

  if (!isAuth) {
       alert("You Need To Login First")
          return (<Navigate to="/Login" />);
  }

  return children;
}

export default PrivateRoute;
