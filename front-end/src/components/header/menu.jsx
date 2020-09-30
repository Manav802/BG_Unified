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
                <span className="display6">Solutions</span>
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
              className="headerMenu-content"
              isOpen={company}
            >
              <div className="d-flex flex-column header-list">
                <Link href="/about">
                  <a className="link py-1">About Us</a>
                </Link>
                <Link href="/newsroom">
                  <a className="link py-1">Newsroom</a>
                </Link>
                <Link href="/solutions">
                  <a className="link py-1">Our Solutions</a>
                </Link>
                <Link href="/about#team">
                  <a className="link py-1">Team</a>
                </Link>
                <Link href="/stories">
                  <a className="link py-1">Customer Stories</a>
                </Link>
              </div>
            </Collapse>
            <Link href="/features">
              <Button className="btn-block btn my-2" bg="white" py="24px">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="display6">Our Features</span>
                </div>
              </Button>
            </Link>
            <Link href="/contact">
              <Button as="a" className="btn-block btn my-2" bg="white" py="24px">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="display6">Contact</span>
                </div>
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter justifyContent="start">
            <Button leftIcon="arrow-back" bg="white" onClick={onClose} color="primary.500">Go Back</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default menu;
