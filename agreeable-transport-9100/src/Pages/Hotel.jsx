

import React, { useContext, useState } from "react";
import { AppContext } from "../Component/AppContext";
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
  
} from "@chakra-ui/react";
import Loading from "./Loading";
import HotelCard from "./HotelCard";
import styles from "./login.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect } from "react";



const Hotel = () => {
  const { data, AllProductsData } = useContext(AppContext);

  const [hotelData, setHotelData] = useState([]);

  
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    setHotelData(AllProductsData.menData);
  }, [hotelData]);

  const PriceSortlow = () => {
    const SortedData = AllProductsData.menData.sort(function (a, b) {
      return a.price - b.price;
    });

    setHotelData([...SortedData]);
  };

  const PriceSorthigh = () => {
    const SortedData = AllProductsData.menData.sort(function (a, b) {
      return b.price - a.price;
    });

    setHotelData([...SortedData]);
  };

  console.log(hotelData);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack style={{ marginTop: "10px" }}>
      <Text align="center" fontSize="20" fontWeight="bold">
        Welcome To TripHub.com !
      </Text>
      <Wrap
        justify="center"
        style={{
          border: "0px solid red",
          margin: "auto",
          marginTop: "5px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Divider orientation="horizontal" />

        <VStack style={{ border: "0px solid blue" }}>
          <Text align="center" fontSize="20" fontWeight="bold">
            Hotels
          </Text>

          <ButtonGroup
            style={{ border: "0px solid green" }}
            size="sm"
            isAttached
            variant="outline"
          >
            <IconButton
              style={{ border: "0px solid red" }}
              onClick={PriceSortlow}
              aria-label="Add to friends"
              icon={<ChevronDownIcon boxSize={8} />}
            />
            <Button fontSize={18}>SORT BY PRICE</Button>
            <IconButton
              onClick={PriceSorthigh}
              aria-label="Add to friends"
              icon={<ChevronUpIcon boxSize={8} />}
            />
          </ButtonGroup>
        </VStack>

        <HStack spacing={50} width="1200px" justify="stretch">
          <SimpleGrid spacing={5} columns={[1, 2, 2, 3]}>
            {hotelData.map((el) => (
              <div
                style={{
                  border: "0px solid green",
                  textAlign: "center",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  borderRadius: "5px",
                }}
              >
                <HotelCard {...el} />
                <Button
                  style={{ marginBottom: "10px" }}
                  colorScheme="messenger"
                >
                  BOOK NOW
                </Button>
              </div>
            ))}
          </SimpleGrid>
        </HStack>
      </Wrap>

      {/* <HotelCard /> */}
    </Stack>
  );
};

export default Hotel;
