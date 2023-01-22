import {
  Wrap,
  HStack,
  VStack,
  Text,
  Badge,
  ButtonGroup,
  IconButton,
  Button,
  Spacer,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { AddIcon, ArrowRightIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Component/AppContext";

const CartSingleCard = ({ el }) => {
  const { handleChange, handleRemove, handlePrice } = useContext(AppContext);

  return (
    <Wrap
      w={700}
      spacing={3}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="5"
      border="0px solid gray"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <HStack border="0px solid yellow" w="full">
        <img
          style={{
            border: "0px solid green",
            borderRadius: "5px",
            padding: "10",
            width: "35%",
            marginLeft: "30px",
          }}
          src={el.avatar}
          alt=""
        />
        <VStack align="revert-layer" spacing={4}>
          <Text fontSize="15" fontWeight="bold" color="gray.500">
            {el.title}
          </Text>

          <Badge fontSize="10x" colorScheme="teal">
            Ratting {"4.4  ⭐"}
          </Badge>

          <Stack>
            <HStack alignContent="center">
              <Text fontWeight="bold" fontSize="2xl">
                ₹{el.price}
              </Text>
            </HStack>

            <HStack spacing={35}>
              <Badge
                w="fit-content"
                padding="3px 10px"
                variant="subtle"
                colorScheme="teal"
              >
                inclusive of all taxes
              </Badge>

              <ButtonGroup size="sm" isAttached variant="outline">
                <Button
                  fontWeight="bold"
                  fontSize="xl"
                  onClick={() => handleChange(el, -1)}
                >
                  -
                </Button>

                <Button>{el.amount}</Button>

                <IconButton
                  onClick={() => handleChange(el, 1)}
                  aria-label="Add to friends"
                  icon={<AddIcon w={3} h={3} />}
                />
              </ButtonGroup>
            </HStack>
          </Stack>
        </VStack>

        <Spacer />

        <Stack w={120}></Stack>
      </HStack>

      <Divider />

      <HStack w="full" spacing={5}>
        <Button
          onClick={() => handleRemove(el.id)}
          w="40%"
          size="md"
          isAttached
          variant="outline"
          backgroundColor="cyan.100"
        >
          REMOVE
        </Button>
        <Divider orientation="vertical" />
        <Button
          w="full"
          size="md"
          isAttached
          variant="outline"
          backgroundColor="cyan.100"
        >
          <HStack spac>
            <AiOutlineHeart fontSize="25px" /> <Text>ADD TO WISHLIST</Text>
          </HStack>
        </Button>
      </HStack>
    </Wrap>
  );
};

export default CartSingleCard;
