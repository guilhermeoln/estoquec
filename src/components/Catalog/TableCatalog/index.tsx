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

export default function TableCatalog() {
  return (
    <TableContainer width="100%" bg="white" borderRadius="8px">
      <Table variant="simple">
        <TableCaption>Produtos Ativos</TableCaption>
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Categoria</Th>
            <Th isNumeric>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textTransform="uppercase">Iphone 12 PRO</Td>
            <Td textTransform="uppercase">Celular</Td>
            <Td isNumeric></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
