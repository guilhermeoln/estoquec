import {
  Flex,
  Text,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import TableCatalog from "./TableCatalog";
import { useProducts } from "@/contexts/hooks/useProducts";
import { useState } from "react";

export default function Catalog() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  const [search, setSearch] = useState("");

  const {
    products,
    addProducts,
    setProducts,
    refetchProducts,
    filterProducts,
  } = useProducts();

  return (
    <Flex
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      alignItems="center"
      py="50px"
    >
      <Text color="#335E29" fontSize="64px">
        {products.length}
      </Text>
      <Text color="#FFFFFF" fontSize="40px">
        PRODUTOS
      </Text>
      <Text color="#000000" fontSize="16px">
        ATIVOS CADASTRADOS
      </Text>
      <Box
        width="80%"
        display="flex"
        flexDirection={isLargerThan900 ? "row" : "column"}
        justifyContent={isLargerThan900 ? "space-between" : "center"}
        alignItems={isLargerThan900 ? "flex-start" : "center"}
        marginTop="80px"
      >
        <InputGroup width="300px" height="50px">
          <Input
            placeholder="Procurar por..."
            width="300px"
            height="50px"
            bg="white"
            borderRadius="40px"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value.toUpperCase());
            }}
            onKeyUp={() => {
              search === "" ? refetchProducts() : filterProducts(search);
            }}
          />
          <InputRightElement height="100%">
            <SearchIcon color="green.500" />
          </InputRightElement>
        </InputGroup>
        <Button
          width="250px"
          height="50px"
          bg="#335E29"
          borderRadius="40px"
          color="white"
          rightIcon={<AddIcon />}
          marginTop={isLargerThan900 ? "0px" : "20px"}
        >
          Adicionar Novo
        </Button>
      </Box>
      <Flex width="80%" marginTop="50px">
        <TableCatalog />
      </Flex>
    </Flex>
  );
}
