import { Badge, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";



const HotelCard = ({ title, avatar, categary,price,Ratting,id}) => {
  const navigate = useNavigate();


  const VisitSingleProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "0px solid red",
        textAlign: "center",
      }}
    >
      <img onClick={VisitSingleProduct} style={{border:"0px solid red",borderRadius:"20px",padding:"10px"}}  src={avatar} alt={title} />

      <div style={{ border: "0px solid blue", padding: "10px"}}>
        <Text fontWeight="bold" color="gray" >
          {title}
        </Text>

        <Text fontWeight="bold" fontSize="16">
          Price:₹{price}
        </Text>
        <Text fontWeight="bold" color="gray" fontSize="12" marginLeft={4}>
          Ratting: {Ratting}
        </Text>
        <Text fontWeight="bold" color="gray" fontSize="10" marginLeft={4}>
          Categary:{categary}
        </Text>
      </div>
    </div>
  );
};


export default HotelCard;
