import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Flex,
  Select,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function ModalAddProduct({ isOpen, onOpen, onClose }: Props) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="6x1">
        <ModalOverlay />
        <ModalContent width="80%">
          <ModalHeader borderBottom="1px solid #ccc" py="20px">
            <Text>Adicionar Produto</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py="30px">
            <form>
              <FormControl>
                <FormLabel>Descrição *</FormLabel>
                <Input type="text" />
                <FormHelperText>Insira a descrição do produto.</FormHelperText>
              </FormControl>
              <FormControl marginTop="30px">
                <FormLabel>IMEI *</FormLabel>
                <Input type="text" />
                <FormHelperText>Digite o IMEI do produto.</FormHelperText>
              </FormControl>
              <Flex
                width="100%"
                marginTop="30px"
                flexDirection={isLargerThan800 ? "row" : "column"}
              >
                <FormControl>
                  <FormLabel>Categoria *</FormLabel>
                  <Select>
                    <option>Selecione uma opção...</option>
                    <option>Iphone</option>
                  </Select>
                  <FormHelperText>
                    Escolha a categoria do produto.
                  </FormHelperText>
                </FormControl>
                <FormControl
                  margin={
                    isLargerThan800 ? "0px 0px 0px 20px" : "30px 0px 0px 0px"
                  }
                >
                  <FormLabel>Modelo *</FormLabel>
                  <Select>
                    <option>Selecione uma opção...</option>
                    <option>PRO</option>
                    <option>PRO MAX</option>
                  </Select>
                  <FormHelperText>Escolha o modelo do produto.</FormHelperText>
                </FormControl>
                <FormControl
                  margin={
                    isLargerThan800 ? "0px 0px 0px 20px" : "30px 0px 0px 0px"
                  }
                >
                  <FormLabel>Memória *</FormLabel>
                  <Select>
                    <option>Selecione uma opção...</option>
                    <option>64GB</option>
                    <option>128GB</option>
                    <option>256GB</option>
                  </Select>
                  <FormHelperText>
                    Escolha a quantidade de memória do produto.
                  </FormHelperText>
                </FormControl>
              </Flex>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button bg="#8EC045" mr={3} color="white">
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
