import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
//  Swal.fire("Welcome!", "Registered successfully!", "success");

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AppContext);

  if (!isAuth) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Login First!",
      
    });
          return (<Navigate to="/Login" />);
  }

  return children;
}

export default PrivateRoute;
