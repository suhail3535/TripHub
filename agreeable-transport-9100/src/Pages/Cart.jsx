import { ArrowRightIcon,} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,

  Divider,

  HStack,

  Spacer,
  Spinner,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Component/AppContext";
import CartSingleCard from "./CartSingleCard";
import Loading from "./Loading";

const Cart = () => {
 


  const { cartData, price, discountPrice, Totalprice, TotalQty } =
    useContext(AppContext);


  const [isLoading, setIsLoading] = useState(true);
  const [isButLoading, setIsButLoading] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  console.log(discountPrice);

  console.log(cartData);

  const BackToPRoductPage = () => {
    setIsButLoading(true);

    setTimeout(() => {
      setIsButLoading(false);
      navigate("/Hotel");
    }, 1500);
  };



  if (isLoading) {
    return <Loading />;
  }

  if (cartData.length === 0) {
    return (
      <Wrap justify="center" style={{ marginTop: "80px" }}>
        <HStack>
        

          <VStack spacing={30}>
            <Text fontSize="3xl">Please Go To Hotel Section </Text>

            <Divider />
            <Button
              onClick={() => BackToPRoductPage()}
              fontSize="x-large"
              padding={8}
              colorScheme="blue"
            >
              <BiShoppingBag fontSize="30px" />
              {!isButLoading && "Please Continue Booking"}
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
          </VStack>
        </HStack>
      </Wrap>
    );
  }

  return (
    // maindiv
    <VStack marginTop="10px" justify="center" border="0px solid green">
      <Text fontSize="2xl" fontWeight="extrabold">
        My Favourite has {TotalQty} item(s)
      </Text>

      <Wrap padding={10} border="0px solid pink" spacing={50}>
        <VStack spacing={5}>
          <HStack spacing={5} w="full" padding={3} bg="#fcffee"></HStack>
          {cartData.map((el) => (
            <CartSingleCard el={el} />
          ))}
        </VStack>

        <VStack spacing={5} style={{}}>
          <HStack spacing={5} w="full" padding={3} bg="cyan" borderRadius="5px">
            <Text fontWeight="bold">Save extra ₹140 with TriBe</Text> <Spacer />{" "}
            <ArrowRightIcon />
          </HStack>

          
          
          <Box
            fontSize="16px"
            w={600}
            spacing={3}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="5"
          >
            Get Rs.200 instant discount on your First Purchase above Rs.999.
            Coupon code -NEW200
          </Box>

          <Box
            fontSize="16px"
            w={600}
            spacing={3}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="5"
          >
            Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
            Coupon code - NEW20. Applicable for new customers only!
          </Box>

          <Box
            bg="#ecf6f5"
            fontWeight="bold"
            fontSize="16px"
            w={600}
            spacing={3}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px 20px"
          >
            Have a Coupon / Referral / Gift Card ?
          </Box>

          <Stack
            bg="RGB(102 234 136)"
            w={600}
            spacing={3}
            borderWidth="1px"
            overflow="hidden"
            padding="5"
            textAlign="center"
            borderRadius="5PX"
          >
            <Text fontWeight="bold" fontSize="20px">
              PRICE SUMMARY
            </Text>{" "}
          </Stack>

          <VStack
            fontSize="16px"
            padding="5"
            w={600}
            spacing={5}
            borderWidth="1px"
            overflow="hidden"
          >
            <HStack w="full">
              <Text fontSize="18px">Total MRP (Incl. of taxes) </Text>
              <Spacer />
              <Text fontWeight="bold" fontSize="18px">
                ₹ {Totalprice}
              </Text>
            </HStack>

            <HStack w="full">
              <Text fontSize="18px">Bag Discount </Text>
              <Spacer />
              <Text fontWeight="bold" fontSize="18px">
                - ₹{discountPrice}{" "}
              </Text>
            </HStack>

            <HStack w="full">
              <Text fontSize="18px">Subtotal </Text>
              <Spacer />
              <Text fontWeight="bold" fontSize="18px">
                ₹{price}
              </Text>
            </HStack>

            <Badge
              borderRadius="2xl"
              fontSize="xl"
              padding="5px 20px"
              w="full"
              variant="subtle"
              color="gray.800"
              colorScheme="green"
            >
              You are saving ₹ {discountPrice} on this order
            </Badge>
          </VStack>

          <HStack w="full" padding="5">
            <Text w="50%" fontSize="2xl" fontWeight="bold">
              Total ₹{price}
            </Text>

            <Divider w="10%" orientation="vertical" />

            <Button
              onClick={() => navigate("/PaymentForm")}
              w="full"
              colorScheme="blue"
              color="white"
              size="lg"
            >
              CheckOut
            </Button>
          </HStack>
        </VStack>
      </Wrap>
    </VStack>
  );
};

export default Cart;
