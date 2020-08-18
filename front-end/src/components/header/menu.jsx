import React from "react";
import { IoIosMenu } from "react-icons/io";
import Services from "../Services/services";
import Link from "next/link";
import {
  Button,
  Box,
  Icon,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/core";

function menu(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [services, showService] = React.useState(false);
  const handleToggle = () => showService(!services);

  const [company, showCompany] = React.useState(false);
  const handleToggle2 = () => showCompany(!company);

  return (
    <div className="d-block d-lg-none">
      <Box
        as={IoIosMenu}
        size="32px"
        onClick={onOpen}
        className="hover-effect mr-3"
      ></Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody style={{ overflowY: "auto" }}>
            <Button
              className="btn-block btn my-2"
              bg="white"
              py="24px"
              onClick={handleToggle}
            >
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="display6">Services</span>
                <Icon
                  name={services ? "chevron-up" : "chevron-down"}
                  size="16px"
                ></Icon>
              </div>
            </Button>
            <Collapse px="16px" mb={4} isOpen={services}>
              <Services></Services>
            </Collapse>
            <Button
              className="btn-block btn my-2"
              bg="white"
              py="24px"
              onClick={handleToggle2}
            >
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="display6">Company</span>
                <Icon
                  name={company ? "chevron-up" : "chevron-down"}
                  size="16px"
                ></Icon>
              </div>
            </Button>
            <Collapse
              px="16px"
              mb={4}
              className="footer-content"
              isOpen={company}
            >
              <div className="d-flex flex-column header-list">
                <Link href="/about">
                  <a>About Us</a>
                </Link>
                <Link href="/newsroom">
                  <a>Newsroom</a>
                </Link>
                <Link href="/solutions">
                  <a> Solutions</a>
                </Link>
              </div>
            </Collapse>
            <Button className="btn-block btn my-2" bg="white" py="24px">
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="display6">Our Features</span>
              </div>
            </Button>
            <Button className="btn-block btn my-2" bg="white" py="24px">
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="display6">Contact</span>
              </div>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default menu;
