import React from "react";
import styles from "../Pages/main.module.css";

const Loading = () => {
  return (
    <>
      <div style={{ width: "1200px", height: "800px" }}>
        <div className={styles.loadingCSS}>
          
          <h1 style={{ fontSize: "50px", marginTop: "200px", marginLeft:"500px"}}>
           loading......
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loading;
