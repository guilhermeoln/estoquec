import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
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
          <Input type="text" />
        </FormControl>
        <FormControl marginTop="20px">
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button width="100%" marginTop="30px" bgColor="black" color="white">
          Entrar
        </Button>
      </form>
    </Flex>
  );
}
