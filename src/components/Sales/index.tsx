import { useSales } from "@/contexts/hooks/useSales";
import { SalesContext } from "@/contexts/sales";
import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sales() {
  const [salesToday, setSalesToday] = useState(0);
  const [salesMonth, setSalesMonth] = useState(0);
  const [salesWeek, setSalesWeek] = useState(0);

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  const { sales } = useSales();

  const today = new Date();

  const dayToday = today.getDate();

  useEffect(() => {
    function calculateTodaySales() {
      var valueSalesToday = 0;
      var valuesSalesMonth = 0;
      var valuesSalesWeek = 0;

      sales.forEach((sale) => {
        if (sale.purchaseDate === dayToday) {
          valueSalesToday += sale.amount;
        }
        valuesSalesMonth += sale.amount;
        valuesSalesWeek += sale.amount;
      });

      setSalesToday(valueSalesToday);
      setSalesWeek(valuesSalesWeek);
      setSalesMonth(valuesSalesMonth);
    }

    calculateTodaySales();
  }, [sales, salesToday, salesMonth, salesWeek]);

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
          <Text fontSize="30px" color="#13250F">
            <span style={{ color: "#8EC045", fontSize: "18px" }}>R$</span>
            {salesToday.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
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
          <Text fontSize="30px" color="#13250F">
            <span style={{ color: "#8EC045", fontSize: "18px" }}>R$</span>
            {salesWeek.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
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
          <Text fontSize="30px" color="#13250F">
            <span style={{ color: "#8EC045", fontSize: "18px" }}>R$</span>
            {salesMonth.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
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
            {sales.length}
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
