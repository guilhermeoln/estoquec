import Catalog from "@/components/Catalog";
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import Sales from "@/components/Sales";

export default function Panel() {
  const [showCatalog, setShowCatalog] = useState(true);
  const [showSales, setShowSales] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  return (
    <Flex width="100%" minH="100vh">
      {isLargerThan900 ? (
        <Flex
          width="200px"
          bgColor="#8EC045"
          flexDirection="column"
          alignItems="center"
          py="30px"
          position="fixed"
          height="100vh"
        >
          <Image
            src="/assets/logoLogin.png"
            width="180"
            height="180"
            alt="logo"
          />
          <Box
            marginTop="50px"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor={showCatalog ? "#94B665" : "transparent"}
            py="30px"
            cursor="pointer"
            _hover={{ bg: "#94B665", transition: "0.2s ease all" }}
            onClick={() => {
              setShowCatalog(true);
              setShowSales(false);
            }}
          >
            <Image
              src="/assets/logoCatalog.png"
              width="30"
              height="30"
              alt="catalog"
            />
            <Text
              color="white"
              marginTop="8px"
              fontSize="20px"
              fontWeight="400"
            >
              Catálogo
            </Text>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor={showSales ? "#94B665" : "transparent"}
            py="30px"
            cursor="pointer"
            _hover={{ bg: "#94B665", transition: "0.2s ease all" }}
            onClick={() => {
              setShowCatalog(false);
              setShowSales(true);
            }}
          >
            <Image
              src="/assets/logoSales.png"
              width="30"
              height="30"
              alt="vendas"
            />
            <Text
              color="white"
              marginTop="8px"
              fontSize="20px"
              fontWeight="400"
            >
              Vendas
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex
          bg="#799D47"
          width={showMenu ? "200px" : "20px"}
          position="fixed"
          height="100vh"
          zIndex="999"
          transition="0.1s ease all"
        >
          {showMenu && (
            <Flex
              flexDirection="column"
              alignItems="center"
              width="100%"
              py="20px"
            >
              <Image
                src="/assets/logoLogin.png"
                width="80"
                height="80"
                alt="logo"
              />
              <Box
                marginTop="50px"
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bgColor={showCatalog ? "#94B665" : "transparent"}
                py="30px"
                cursor="pointer"
                _hover={{ bg: "#94B665", transition: "0.2s ease all" }}
                onClick={() => {
                  setShowCatalog(true);
                  setShowSales(false);
                }}
              >
                <Image
                  src="/assets/logoCatalog.png"
                  width="20"
                  height="20"
                  alt="catalog"
                />
                <Text
                  color="white"
                  marginTop="8px"
                  fontSize="18px"
                  fontWeight="400"
                >
                  Catálogo
                </Text>
              </Box>
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bgColor={showSales ? "#94B665" : "transparent"}
                py="30px"
                cursor="pointer"
                _hover={{ bg: "#94B665", transition: "0.2s ease all" }}
                onClick={() => {
                  setShowCatalog(false);
                  setShowSales(true);
                }}
              >
                <Image
                  src="/assets/logoSales.png"
                  width="20"
                  height="20"
                  alt="vendas"
                />
                <Text
                  color="white"
                  marginTop="8px"
                  fontSize="18px"
                  fontWeight="400"
                >
                  Vendas
                </Text>
              </Box>
            </Flex>
          )}
          {showMenu ? (
            <ArrowLeftIcon
              bg="white"
              borderRadius="50%"
              fontSize="20px"
              padding="5px"
              position="absolute"
              marginTop="50px"
              marginLeft={showMenu ? "190px" : "10px"}
              cursor="pointer"
              onClick={() => setShowMenu(false)}
              transition="0.2s ease all"
            />
          ) : (
            <ArrowRightIcon
              bg="white"
              borderRadius="50%"
              fontSize="20px"
              padding="5px"
              position="absolute"
              marginTop="50px"
              marginLeft={showMenu ? "100px" : "10px"}
              cursor="pointer"
              onClick={() => setShowMenu(true)}
              transition="0.2s ease all"
            />
          )}
        </Flex>
      )}

      <Flex
        width={isLargerThan900 ? "calc(100% + 200px)" : "100%"}
        marginLeft={isLargerThan900 ? "200px" : "0px"}
        height="100%"
        bgColor="white"
      >
        {showCatalog && <Catalog />}
        {showSales && <Sales />}
      </Flex>
    </Flex>
  );
}
