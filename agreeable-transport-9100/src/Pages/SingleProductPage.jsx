import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  HStack,
  Image,
  Spacer,
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
import { AiOutlineHeart } from "react-icons/ai";
const SingleProductPage = () => {
  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  const [isButLoading, setIsButLoading] = useState(false);
  const [data, setData] = useState(null);
  

  const [DefaultImg, setImage] = useState();

  const [bagbutton, setbagbutton] = useState(true);

    
  const { CartDataToMatch, cartData, handleCart } = useContext(AppContext);
  //  console.log("line27",CartDataToMatch)

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const handleClick = () => {
    setIsButLoading(true);

    setTimeout(() => {
      alert("Added To Cart");

      setIsButLoading(false);
      handleCart(data[0]);
      setbagbutton(false);
      console.log(data[0]);
    }, 1500);
  };

  // id is a string so we need to convert it to number
  const { id } = useParams();
  /// console.log(typeof(id))

  // console.log(cartData)

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
        marginTop: "10px",
        marginBottom: "50px",
        border: "0px solid blue",
  
      }}
    >
      <HStack spacing={5}>
        <Image borderRadius={15} src={DefaultImg} w="350px" />
      </HStack>

      <VStack width={550} align="revert-layer" spacing={5}>
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

        <Divider />

        <HStack
          w="full"
          style={{ border: "0px solid green", margin: "0px 0px 20px 0px" }}
        >
          <Button
            onClick={() => handleClick()}
            fontSize="x-large"
            padding={8}
            w="full"
            colorScheme="blue"
          >
            {!isButLoading && bagbutton && "ADD TO BAG"}
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
