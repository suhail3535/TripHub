import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Component/AppContext";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";


const PaymentForm = () => {
  const { price } = useContext(AppContext);

  const navigate = useNavigate();

  const PaymentDone = () => {
 Swal.fire("Congratulations!", "Payment successfull!", "success");
    navigate("/ordersucccessfull");
  };

  return (
    <>
      <VStack
        spacing={5}
        width="1200px"
        border="0px solid gray"
        backgroundColor="lightgoldenrodyellow"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        margin="auto"
        style={{ marginTop: "30px" }}
        marginBottom="50px"
      >
        <Text fontWeight="bold" fontSize="xl">
          Choose your payment method
        </Text>

        <HStack spacing={5} style={{ border: "0px solid green" }}>
          <VStack
            marginTop="-200px"
            width={500}
            align="flex-start"
            padding={5}
            bg="#eeeeee"
            border="0px solid blue"
          >
            <HStack>
              <Image
                w={25}
                src="data:image/jpeg;base64,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"
              />
              <Text>Debit/Credit Card</Text>
            </HStack>

            <Divider />

            <HStack>
              <Image
                w={25}
                src="data:image/png;base64,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"
              />
              <Text>WALLET</Text>
            </HStack>

            <Divider />
            <HStack>
              <Image
                w={25}
                src="data:image/png;base64,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"
              />
              <Text>UPI</Text>
            </HStack>

            <Divider />
            <HStack>
              <Image
                w={25}
                src="data:image/png;base64,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"
              />
              <Text>NET BANKING</Text>
            </HStack>

            <Divider />
          </VStack>

          <VStack
            align="flex-start"
            border={"0px solid green"}
            spacing={5}
            padding={5}
          >
            <VStack>
              <HStack>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input style={{ border: "1px solid gray" }} size="sm" />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input style={{ border: "1px solid gray" }} size="sm" />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input style={{ border: "1px solid gray" }} size="sm" />
              </FormControl>

              <HStack>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input style={{ border: "1px solid gray" }} size="sm" />
                </FormControl>
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <Input
                    style={{ border: "1px solid gray" }}
                    type="city"
                    size="sm"
                  />
                </FormControl>
              </HStack>
            </VStack>

            <Divider />

            <VStack>
              <HStack width="full">
                <FormControl>
                  <FormLabel>Card Number</FormLabel>
                  <Input
                    style={{ border: "1px solid gray" }}
                    w={280}
                    size="sm"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>CVV</FormLabel>
                  <HStack width="full">
                    <PinInput size="sm">
                      <PinInputField style={{ border: "1px solid gray" }} />
                      <PinInputField style={{ border: "1px solid gray" }} />
                      <PinInputField style={{ border: "1px solid gray" }} />
                    </PinInput>
                  </HStack>
                </FormControl>
              </HStack>

              <HStack>
                <FormControl>
                  <FormLabel>Exp MOnth</FormLabel>
                  <Input style={{ border: "1px solid gray" }} size="sm" />
                </FormControl>
                <FormControl>
                  <FormLabel>Exp Year</FormLabel>
                  <Input style={{ border: "1px solid gray" }} size="sm" />
                </FormControl>
              </HStack>

              <Button
                style={{ marginTop: "20px" }}
                onClick={PaymentDone}
                fontSize="x"
                padding={3}
                w="full"
                colorScheme="cyan"
              >
                PAY ₹{price}
              </Button>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};
export default PaymentForm;
