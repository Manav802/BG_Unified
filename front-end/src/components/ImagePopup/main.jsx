import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/core";
function ImgPopUp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        width={props.width}
        height={props.height}
        backgroundImage={"url(" + props.image + ")"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        onClick={onOpen}
      ></Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={props.closeBtnColor} />
          <ModalBody p={0} textAlign="center">
            <img src={props.image} alt="Text" width="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImgPopUp;
