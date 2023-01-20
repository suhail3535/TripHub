import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import newstyle from "./Newstyle.module.css";

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item) => (
        <Carousel.Item className={newstyle.coro}>
          <img className="d-block w-100" src={item} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
