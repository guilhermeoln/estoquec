import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { useProducts } from "@/contexts/hooks/useProducts";

export default function TableCatalog() {
  const { products, addProducts } = useProducts();

  return (
    <TableContainer width="100%" bg="white" borderRadius="8px">
      <Table variant="simple">
        <TableCaption>Produtos Ativos</TableCaption>
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Categoria</Th>
            <Th>Preço</Th>
            <Th isNumeric>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td textTransform="uppercase">{product.description}</Td>
              <Td textTransform="uppercase">{product.category}</Td>
              <Td>
                {product.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </Td>
              <Td isNumeric></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
