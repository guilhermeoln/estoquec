import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import Image from "next/image";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Home() {
  const [viewPassword, setViewPassword] = useState(false);

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#88AF52"
    >
      {isLargerThan1200 && (
        <Box position="absolute" marginRight="75%" zIndex="1">
          <Text
            position="absolute"
            color="white"
            maxW="300px"
            marginTop="50%"
            marginLeft="50px"
            fontSize="30px"
          >
            Bem-vindo ao nosso software de gestão de vendas, a solução ideal
            para ajudar a impulsionar o seu negócio!
          </Text>
          <Image
            src="/assets/elipse.png"
            width="480"
            height="480"
            alt="elipse"
          />
        </Box>
      )}

      <Image src="/assets/logoLogin.png" width="250" height="250" alt="logo" />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl marginTop="30px">
          <Input
            type="text"
            placeholder="Digite seu usuário"
            bgColor="rgba(223, 223, 223, 0.2);"
            border="none"
            width="300px"
            height="60px"
            borderRadius="0px"
          />
        </FormControl>
        <FormControl marginTop="20px">
          <InputGroup>
            <Input
              placeholder="Digite sua senha"
              type={viewPassword ? "text" : "password"}
              bgColor="rgba(223, 223, 223, 0.2);"
              border="none"
              width="300px"
              height="60px"
              borderRadius="0px"
            />
            <InputRightElement
              display="flex"
              height="100%"
              alignItems="center"
              // eslint-disable-next-line react/no-children-prop
              children={
                viewPassword ? (
                  <ViewOffIcon
                    onClick={() => setViewPassword(!viewPassword)}
                    cursor="pointer"
                  />
                ) : (
                  <ViewIcon
                    onClick={() => setViewPassword(!viewPassword)}
                    cursor="pointer"
                  />
                )
              }
            />
          </InputGroup>
        </FormControl>
        <Box width="100%">
          <Text
            fontSize="14px"
            color="#FFFFFF"
            marginTop="5px"
            cursor="pointer"
          >
            Esqueci minha senha
          </Text>
        </Box>
        <Button
          width="200px"
          height="50px"
          marginTop="30px"
          bgColor="black"
          color="white"
          border="2px solid #FFFFFF"
          backgroundColor="transparent"
          borderRadius="0px"
        >
          Entrar
        </Button>
      </form>
    </Flex>
  );
}
