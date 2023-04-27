import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

export default function Sales() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Flex
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py="50px"
    >
      <Box
        width="70%"
        display="flex"
        justifyContent={isLargerThan900 ? "space-between" : "center"}
        alignItems={isLargerThan900 ? "flex-start" : "center"}
        flexDirection={isLargerThan900 ? "row" : "column"}
      >
        <Flex
          width="290px"
          height="95px"
          bg="white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          borderRadius="47px"
        >
          <Text fontSize="40px" color="#13250F">
            <span style={{ color: "#8EC045", fontSize: "24px" }}>R$</span>
            00,00
          </Text>
          <Text>Vendidos hoje</Text>
        </Flex>
        <Flex
          width="290px"
          height="95px"
          bg="white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          borderRadius="47px"
          marginTop={isLargerThan900 ? "0px" : "20px"}
        >
          <Text fontSize="40px" color="#13250F">
            <span style={{ color: "#8EC045", fontSize: "24px" }}>R$</span>
            00,00
          </Text>
          <Text>Vendas semanais</Text>
        </Flex>
        <Flex
          width="290px"
          height="95px"
          bg="white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          borderRadius="47px"
          marginTop={isLargerThan900 ? "0px" : "20px"}
        >
          <Text fontSize="40px" color="#13250F">
            <span style={{ color: "#8EC045", fontSize: "24px" }}>R$</span>
            00,00
          </Text>
          <Text>Vendas mensais</Text>
        </Flex>
      </Box>
      <Box
        width="70%"
        display="flex"
        justifyContent={isLargerThan900 ? "space-between" : "center"}
        alignItems={isLargerThan900 ? "flex-start" : "center"}
        flexDirection={isLargerThan900 ? "row" : "column"}
        marginTop="50px"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="290px"
          height="290px"
          bg="white"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          borderRadius="31px"
          cursor="pointer"
        >
          <Image
            src="/assets/cartIcon.png"
            width="80"
            height="80"
            alt="icon-cart"
          />
          <Text fontSize="20px" marginTop="15px">
            NOVA VENDA
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          height="290px"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#8EC045" fontSize="64px">
            0
          </Text>
          <Text color="#000000" fontSize="40px">
            VENDAS
          </Text>
          <Text color="#000000" fontSize="14px">
            VENDAS REALIZADAS
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          width="290px"
          height="290px"
          alignItems="center"
          justifyContent="center"
          bg="white"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          borderRadius="31px"
          cursor="pointer"
        >
          <Image
            src="/assets/iconSearch.png"
            width="80"
            height="80"
            alt="icon-busca"
          />
          <Text fontSize="20px" marginTop="15px">
            CONSULTAR VENDAS
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
