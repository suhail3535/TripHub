
import React from "react";
import { useContext, useState } from "react";

import Hotel from "../Pages/Hotel";
import SingleProductPage from "../Pages/SingleProductPage";
import { NavLink } from "react-router-dom";
import OrderSuccessfull from "../Pages/OrderSuccessfull";
import Cart from "../Pages/Cart";
import { AppContext } from "./AppContext";
import PaymentForm from "../Pages/PaymentForm";
import { Link } from "react-router-dom";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "../Pages/main.module.css";
import { Box } from "@chakra-ui/react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar({ price }) {
  
const { userName, isAuth, logoutUser,TotalQty } =
  useContext(AppContext);

const [active, setActive] = useState("");



/// LOGOUT
const LogOut_User = () => {
  
      Swal.fire( "LoggedOut successfully!", "");
  logoutUser();
};




  
  return (
    <>
      <Box
        class="main_box"
        style={{
          border: "0px solid red",
          // height: "100px",

          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

          width: " 100%",
          marginTop: "10px",
        }}
      >
        <div className="imgdiv">
          <Link to="/">
            <img
              width={"80PX"}
              src={
                "data:image/jpeg;base64,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"
              }
              alt="Logo"
            />
          </Link>
        </div>
        <div>
          <span>
            <FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon>
          </span>
          <Link>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Flights
            </p>{" "}
          </Link>
        </div>
        <div>
          <span>
            <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
          </span>
          <Link to="Hotel" element={<Hotel />}>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Hotels
            </p>
          </Link>
        </div>
        <div>
          <span>
            <HolidayVillageIcon
              style={{ fontSize: 30, padding: 4 }}
            ></HolidayVillageIcon>
          </span>

          <Link>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Hoiday packages
            </p>
          </Link>
        </div>
        <div>
          <span>
            <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
          </span>
          <Link>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Trains
            </p>
          </Link>
        </div>
        <div>
          <span>
            <LocalTaxiIcon style={{ fontSize: 30, padding: 4 }}></LocalTaxiIcon>
          </span>

          <Link to="products/:id" element={<SingleProductPage />}>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Cabs
            </p>
          </Link>
        </div>
        <div>
          <span>
            <CreditCardIcon
              style={{ fontSize: 30, padding: 4 }}
            ></CreditCardIcon>
          </span>
          <Link to="PaymentForm" element={<PaymentForm />}>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Payment
            </p>
          </Link>
        </div>

        <div>
          <span>
            <DirectionsBusFilledIcon
              style={{ fontSize: 30, padding: 4 }}
            ></DirectionsBusFilledIcon>
          </span>
          <Link>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
              Bus
            </p>
          </Link>
        </div>
        {/* *****************navbar************** */}

        <div id={styles.searchBars}>
          <div>
            <div className={styles.iconInput}>
              <input
                type="text"
                id={styles.inpSrch}
                placeholder="search by product,category or collection"
              ></input>
            </div>
            <div id={styles.searchBarsData}></div>
          </div>
          <div style={{ border: "0px solid blue", marginLeft: "10px" }}>
            <div>
              <span>
                <AccountCircleIcon
                  style={{ fontSize: 30, padding: 4, border:"0px solid green", marginLeft:"15px", marginBottom:"5px"}}
                ></AccountCircleIcon>
              </span>

            </div>
            {!isAuth && (
            <NavLink
              style={{ fontWeight: "bold" }}
              id={styles.loginButton}
              to="/Login"
              onClick={() => setActive("")}
              className={styles.LogoutHOver}
            >
              Login
            </NavLink>
          )}
          </div>



          
        
          {
            <div style={{ border: "0px solid yellow" }}>
              {isAuth && (
                <div style={{ textAlign: "center", border: "0px solid pink" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      textAlign: "center",
                      border: "0px solid green",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: "bold", color: "blue" }}>
                        {userName}
                      </p>
                    </div>

                    <button
                      onClick={LogOut_User}
                      className={styles.LogoutHOver}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          }

          {/* *******************fav*********** */}
          <div style={{ border: "0px solid blue", marginLeft: "10px" }}>
            <div>
              <span>
                <FavoriteIcon
                  style={{ fontSize: 30, padding: 4 }}
                ></FavoriteIcon>
              </span>
            </div>

            <div style={{ border: "0px solid green" }}>
              <Link to="Cart" element={<Cart />}>
                <p style={{ fontSize: 12, fontWeight: "bold", color: "black" }}>
                  Favourite
                </p>
                {TotalQty !== 0 ? (
                  <p
                    style={{
                      border: "1px solid white",
                      borderRadius: "50px",
                      width: "40px",
                      textAlign: "center",
                      backgroundColor: "#b2f5ea",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {TotalQty}
                  </p>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* ***************************** */}
        <div>
          <span></span>
          <Link to="ordersucccessfull" element={<OrderSuccessfull />}></Link>
        </div>
      </Box>
    </>
  );
}

export default Navbar;

