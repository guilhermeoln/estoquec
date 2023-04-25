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
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Home() {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="40px" marginBottom="50px">
        ESTOQUEC
      </Text>
      <form>
        <FormControl>
          <FormLabel>Usuário</FormLabel>
          <Input type="text" placeholder="Digite seu usuário" />
        </FormControl>
        <FormControl marginTop="20px">
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <Input
              placeholder="Digite sua senha"
              type={viewPassword ? "text" : "password"}
            />
            <InputRightElement
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
        <Button width="100%" marginTop="30px" bgColor="black" color="white">
          Entrar
        </Button>
      </form>
    </Flex>
  );
}
