import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,Image,Button,useDisclosure,Flex
  } from "@chakra-ui/core";
import { FaPlay} from 'react-icons/fa';

function CardSideVideo({data,...props}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const OnClickModal = ()=> {
        return (
          <>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent minW={data.minW} minH={data.minW} width={data.width} height={data.height}>
                <ModalHeader>{data.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody marginBottom={3} >
                    {data.body}
                </ModalBody>
      
                
              </ModalContent>
            </Modal>
          </>
        );
      }

    return (
        <div>
            <Box cursor="pointer" onClick={onOpen} height="340px" minW="250px" fontWeight="500">
              <Box pos="relative" rounded={8} p={12} overflow="hidden" height="100%">
                <Image zIndex="0" style={{filter:"blur(3px)",border:"none"}}  className="bg-image" src={data.thumbnail}></Image>
                <Flex  height="100%" direction="column" alignItems="center" justifyContent="center">
                  <Button borderRadius={"100%"} p={3} > <FaPlay/> </Button>
                  <Box mt={3} zIndex={10} color="White" >Watch Video</Box>
                </Flex>
              </Box>
            </Box>
            
            <OnClickModal/>
        </div>
    )
}

export default CardSideVideo




