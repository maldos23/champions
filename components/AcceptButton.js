import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

export default function AcceptButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} color="#FFF" background="rgba(123,81,222,1)">
        Aceptar Champions
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contrato de firma de champions</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Image
              src="/shiba.png"
              width={250}
              height={150}
              layout="fixed"
              objectFit="contain"
            />
            <br />
            Apartir de ahora tu aceptas Karen almazan la champions con efecto
            inmediato para la firma de contrato en un lugar fifi{" "}
            <b>Revisar terminos y condiciones </b> por lo cual el mushasho gino
            puede admitir que est champions.
          </ModalBody>

          <ModalFooter>
            <Button color="rgba(123,81,222,1)" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              color="#FFF"
              background="rgba(123,81,222,1)"
              as="a"
              href="https://api.whatsapp.com/send?phone=+525533654162&text=Se%20confirma%20ahora%20la%20champions"
            >
              Aceptar Campions
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
