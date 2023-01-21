

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



const MenProducts = () => {
  const { data, AllProductsData } = useContext(AppContext);

  const [mendata, setmenData] = useState([]);

  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  useEffect(() => {
    setmenData(AllProductsData.menData);
  }, [mendata]);

  const PriceSortlow = () => {
    const SortedData = AllProductsData.menData.sort(function (a, b) {
      return a.price - b.price;
    });

    setmenData([...SortedData]);
  };

  const PriceSorthigh = () => {
    const SortedData = AllProductsData.menData.sort(function (a, b) {
      return b.price - a.price;
    });

    setmenData([...SortedData]);
  };

  console.log(mendata);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack style={{ marginTop: "80px" }}>
      <Text align="center" fontSize="20" fontWeight="bold">
        Welcome To TripHub.com !
      </Text>
      <Wrap
        justify="center"
        style={{
          border: "0px solid red",
          margin: "auto",
          marginTop: "20px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Divider orientation="horizontal" />

        <VStack style={{border:"1px solid blue"}}>
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
            {mendata.map((el) => (
              <HotelCard {...el} />
            ))}
          </SimpleGrid>
        </HStack>
      </Wrap>

      {/* <HotelCard /> */}
    </Stack>
  );
};

export default MenProducts;
