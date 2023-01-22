import {
  Badge,

  Button,

 
  Divider,

  HStack,
  Image,
 
  Spinner,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Component/AppContext";
import Loading from "./Loading";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart } from "react-icons/ai";
const SingleProductPage = () => {
  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  const [isButLoading, setIsButLoading] = useState(false);
  const [data, setData] = useState(null);
  

  const [DefaultImg, setImage] = useState();

  const [bagbutton, setbagbutton] = useState(true);

    
  const { CartDataToMatch, handleCart } = useContext(AppContext);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const handleClick = () => {
    setIsButLoading(true);

    setTimeout(() => {
      // alert("Added To Favourite Page");
      Swal.fire("", "Your Choice added!", "success");

      setIsButLoading(false);
      handleCart(data[0]);
      setbagbutton(false);
      console.log(data[0]);
    },1000);
  };

  
  const { id } = useParams();
 
  useEffect(() => {
    let obj = CartDataToMatch.filter((el) => {
      if (el.id === Number(id)) {
        return true;
      }
      return false;
    });

    console.log("70",obj);

    setData(obj);
    setImage(obj[0].moreImage[0]);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrap
      spacing={30}
      justify="center"
      style={{
        border: "0px solid yellow",
        width: "70%",
        margin: "20px auto",
      boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
  
      }}
    >
      <HStack spacing={5}>
        <Image borderRadius={15} src={DefaultImg} w="350px" />
      </HStack>

      <VStack border="0px solid green" width={550} align="revert-layer" spacing={5}>
        <Text
          fontSize="30"
          fontWeight="bold"
          marginTop={50}
          color="gray.500"
        ></Text>
        <Text marginTop={30} fontSize="2xl" color="gray.500">
          {data[0].title}
        </Text>

        <Badge
          fontSize="18px"
          variant="outline"
          width="fit-content"
          colorScheme="teal"
        >
          {"4.4  ⭐"}
        </Badge>

        <Stack>
          <HStack alignContent="center">
            <Text fontWeight="bold" fontSize="4xl">
              ₹{data[0].price}
            </Text>

            <Text as="s" marginLeft={4} fontSize="xl">
              ₹{data[0].strikeprice}
            </Text>
          </HStack>
          <Text>inclusive of all taxes</Text>
        </Stack>

        <Divider />

        <Badge fontSize="xl" variant="subtle" colorScheme="teal">
          ₹{data[0].price - 50} for tribe members only
        </Badge>

        <Text>
          TriBe members get an extra discount of ₹20 and FREE shipping.Learn
          more
        </Text>

       

        <Divider />

        <HStack
          w="full"
          style={{ border: "0px solid green", margin: "15px 0px 20px 0px" }}
        >
          <Button
            onClick={() => handleClick()}
            fontSize="x-large"
            padding={8}
            w="full"
            colorScheme="blue"
          >
            {!isButLoading && bagbutton && "ADD TO FAV"}
            {!isButLoading && !bagbutton && "ADDED"}
            {isButLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </Button>

          <Button
            fontSize="x-large"
            padding={8}
            w="full"
            colorScheme="teal"
            variant="outline"
          >
            <AiOutlineHeart fontSize="30px" /> WISHLIST
          </Button>
        </HStack>
      </VStack>
    </Wrap>
  );
};

export default SingleProductPage;
