import React, { useContext } from "react";
import styles from "./login.module.css";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Component/AppContext";
import Loading from "./Loading";
 
const Login = () => {
  const { loginUser, isAuth } = useContext(AppContext);

  const [isLoading, setLoading] = useState(false);

  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");

  const navigate = useNavigate();

  // console.log(Name,Number)

  // console.log(isAuth);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      prompt("ENTER OTP");
      alert("REGISTERED SUCCESSFULLY");
     
      setLoading(false);
      // loginUser(Name);
      console.log(Name);
      navigate("/");
    }, 2000);
  };

  // is Loading   //
  const [isPageLoading, setPageIsLoading] = useState(true);

  setTimeout(() => {
    setPageIsLoading(false);
  }, 1500);

  // console.log(data)

  if (isPageLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.submain}>
          <h1 style={{ fontWeight: "bold" }}>
            Welcome to TripHub !
          </h1>
          <div style={{ width: "80%", margin: "auto" }}>
            <img
              style={{ width: "100%" }}
              src="data:image/jpeg;base64,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"
              alt="welcome"
            />
          </div>
        </div>

        <div className={styles.loginmain}>
          <h2 style={{ fontWeight: "bold" }}>Log in / Sign up</h2>
          <p className={styles.loginP}>
            for Latest trends, exciting offers and everything Bewakoof!
          </p>
          <input
            style={{
              width: "420px",
              height: "60px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "20px",
              marginTop: "30px",
              border: "1px solid blue",
            }}
            id="mobile_number"
            name="name"
            placeholder="Enter Your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={{
              width: "420px",
              height: "60px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "20px",
              marginTop: "30px",
              border: "1px solid blue",
            }}
            id="mobile_number"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "blue",
              border: "none",
              color: " white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "5px",
              width: "420px",
              height: "50px",
              textTransform: "uppercase",
              marginTop: "10px",
            }}
            onClick={handleClick}
          >
            {!isLoading && "REGISTER"}
            {isLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>--------------</div>
            <p>{`  OR  `} </p>
            <div>--------------</div>
          </div>

          <button
            style={{
              backgroundColor: "white",
              color: " #6B6B6B",
              padding: "5px 40px 10px 40px",
              textAlign: "center",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid black",
              borderRadius: "5px",
              margin: "10px",
              width: "377px",
            }}
            onClick={handleClick}
          >
            <img
              style={{ width: "20px", margin: "0 15px 0px 15px" }}
              src="https://images.bewakoof.com/web/carbon-email-1620039620.png"
              alt=""
            />
            CONTINUE WITH EMAIL
          </button>
          <div style={{ display: "flex" }}>
            <a
              href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fheady%2drabbits%2d8947%2eherokuapp%2ecom%2Fusers%2Fauth%2Fgoogle%2Fcallback&client_id=${process.env.REACT_APP_GOOGLE_CLIENTID}&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email`}
            >
              <button
                style={{
                  backgroundColor: "white",
                  color: " #6B6B6B",
                  padding: "5px 40px 5px 30px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                  alt=""
                />
                GOOGLE
              </button>
            </a>

            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1548728332017744&kid_directed_site=0&app_id=1548728332017744&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D1548728332017744%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%252Cuser_hometown%252Cuser_location%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.bewakoof.com%252Flogin%252Ffacebook%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dba16d91c-1c50-4965-97e6-31128372d4c2%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
              <button
                style={{
                  backgroundColor: "white",
                  color: " #6B6B6B",
                  padding: "5px 25px 5px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                  alt=""
                />
                FACEBOOK
              </button>
            </a>
          </div>
          <small style={{ textAlign: "center" }}>
            <p
              style={{
                width: "450px",
                height: "30px",
                margin: "auto",
                marginTop: "30px",
                color: "gray",
              }}
            >
              By creating an account or logging in, you agree with Bewakoof's
              <a
                style={{
                  textDecoration: "none",
                  color: "#1CB4C0",
                  fontWeight: "800",
                }}
                href="https://www.bewakoof.com/terms-and-conditions"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Terms and Conditions{" "}
              </a>
              and
              <a
                style={{
                  textDecoration: "none",
                  color: "#00AFAF",
                  fontWeight: "800",
                }}
                href="https://www.bewakoof.com/privacy-policy-and-disclaimer"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Privacy Policy
              </a>
              .
            </p>
          </small>
        </div>
      </div>
    </>
  );
};

export default Login;
