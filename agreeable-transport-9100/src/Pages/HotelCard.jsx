import { Badge, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

//  <HoverImage src={yourFile} hoverSrc={yourFileHover} />

const HotelCard = ({ title, avatar, categary,price,Ratting,id}) => {
  const navigate = useNavigate();

  // to navigate to More Product Details
  const VisitSingleProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      < img onClick={VisitSingleProduct} src={avatar} alt={title} />

      <VStack align="revert-layer">
      
        <Text fontSize="15" color="gray.500">
          {title}
        </Text>
        <Flex>
          <Text fontWeight="bold" fontSize="2xl">
            ₹{price}
          </Text>

          <Text as="s" marginLeft={4}>
            {categary}
          </Text>
          <Text as="s" marginLeft={4}>
            {Ratting}
          </Text>
        </Flex>
      </VStack>
    </div>
  );
};


export default HotelCard;
