import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <div>
      <VStack
        margin="auto"
        style={{
          border: "1px solid gray",
          width: "40%",
          margin: " auto",
          marginTop:"10PX",
          marginBottom: "100px",
        
        }}
      >
        <div>
          <img
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>

        <Button
          width="50%"
          style={{ marginTop: "0px", marginBottom: "50px" }}
          onClick={() => navigate("/")}
          fontSize="x"
          padding={5}
          colorScheme="teal"
        >
          Enjoy Your Booking!
        </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
