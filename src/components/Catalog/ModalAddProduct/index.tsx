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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IProduct } from "@/types/IProduct";

import { useProducts } from "@/contexts/hooks/useProducts";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type FormData = {
  description: string;
  imei: string;
  category: string;
  model: string;
  memory: string;
  price: number;
};

const schemaValidation = yup
  .object({
    description: yup.string().required("A descrição é obrigatória!"),
    imei: yup.string().required("O IMEI é obrigatório!"),
    category: yup.string().required("A categoria é origatória!"),
    model: yup.string().required("O modelo é obrigatório!"),
    memory: yup.string().required("A memória é obrigatória!"),
    price: yup.number().required("O Valor é obrigatório!"),
  })
  .required();

export default function ModalAddProduct({ isOpen, onOpen, onClose }: Props) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const [messageSucess, setMessageSucess] = useState("");

  const { addProducts } = useProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const insertProduct = (productData: FormData) => {
    addProducts(productData);
    setMessageSucess("Produto adicionado com sucesso!");
    reset();
  };

  console.log(errors);

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
            {messageSucess && (
              <Flex
                width="100%"
                padding="8px"
                justifyContent="space-between"
                alignItems="center"
                bg="#8EC045"
                color="white"
                borderRadius="5px"
                marginBottom="20px"
              >
                <Text>{messageSucess}</Text>
                <Text onClick={() => setMessageSucess("")} cursor="pointer">
                  X
                </Text>
              </Flex>
            )}
            <form onSubmit={handleSubmit(insertProduct)}>
              <FormControl isInvalid={!!errors.description}>
                <FormLabel>Descrição *</FormLabel>
                <Input type="text" {...register("description")} />
                <FormErrorMessage>{`${errors.description?.message}`}</FormErrorMessage>
                <FormHelperText>Insira a descrição do produto.</FormHelperText>
              </FormControl>
              <Flex
                width="100%"
                marginTop="30px"
                flexDirection={isLargerThan800 ? "row" : "column"}
              >
                <FormControl isInvalid={!!errors.imei}>
                  <FormLabel>IMEI *</FormLabel>
                  <Input type="text" {...register("imei")} />
                  <FormErrorMessage>{`${errors.imei?.message}`}</FormErrorMessage>
                  <FormHelperText>Digite o IMEI do produto.</FormHelperText>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.price}
                  margin={
                    isLargerThan800 ? "0px 0px 0px 20px" : "30px 0px 0px 0px"
                  }
                >
                  <FormLabel>Valor *</FormLabel>
                  <Input type="number" {...register("price")} min={1} />
                  <FormErrorMessage>{`${errors.price?.message}`}</FormErrorMessage>
                  <FormHelperText>Digite o valor do produto.</FormHelperText>
                </FormControl>
              </Flex>

              <Flex
                width="100%"
                marginTop="30px"
                flexDirection={isLargerThan800 ? "row" : "column"}
              >
                <FormControl isInvalid={!!errors.category}>
                  <FormLabel>Categoria *</FormLabel>
                  <Select {...register("category")}>
                    <option value="">Selecione uma opção...</option>
                    <option value="IPHONE">Iphone</option>
                  </Select>
                  <FormErrorMessage>{`${errors.category?.message}`}</FormErrorMessage>
                  <FormHelperText>
                    Escolha a categoria do produto.
                  </FormHelperText>
                </FormControl>
                <FormControl
                  margin={
                    isLargerThan800 ? "0px 0px 0px 20px" : "30px 0px 0px 0px"
                  }
                  isInvalid={!!errors.model}
                >
                  <FormLabel>Modelo *</FormLabel>
                  <Select {...register("model")}>
                    <option value="">Selecione uma opção...</option>
                    <option value="PRO">PRO</option>
                    <option value="PRO MAX">PRO MAX</option>
                  </Select>
                  <FormErrorMessage>{`${errors.model?.message}`}</FormErrorMessage>
                  <FormHelperText>Escolha o modelo do produto.</FormHelperText>
                </FormControl>
                <FormControl
                  margin={
                    isLargerThan800 ? "0px 0px 0px 20px" : "30px 0px 0px 0px"
                  }
                  isInvalid={!!errors.memory}
                >
                  <FormLabel>Memória *</FormLabel>
                  <Select {...register("memory")}>
                    <option value="">Selecione uma opção...</option>
                    <option value="64GB">64GB</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                  </Select>
                  <FormErrorMessage>{`${errors.memory?.message}`}</FormErrorMessage>
                  <FormHelperText>
                    Escolha a quantidade de memória do produto.
                  </FormHelperText>
                </FormControl>
              </Flex>
              <Flex marginTop="50px" width="100%" justifyContent="flex-end">
                <Button
                  variant="ghost"
                  colorScheme="red"
                  mr={3}
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button bg="#8EC045" mr={3} color="white" type="submit">
                  Adicionar
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
