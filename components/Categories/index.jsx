import React from "react";
import {
  Flex,
  Text,
  VStack,
  HStack,
  color,
  Grid,
  InputLeftAddon,
  ButtonGroup,
  Button,
  Box,
  Spacer,
  CheckboxIcon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { StarIcon } from "@graphiql/react";
import { Inter } from "next/font/google";
import { BiMessage, BiSearch, BiStar } from "react-icons/bi";
import logo from "@/public/logo1.png";
import Image from "next/image";
function Categories() {
  return (

    <Flex bg="gray.100"  justify="space-between">
    <Box pl={7}>
      <Button>Programming & Tech</Button>
      <Button>Writing & Translation</Button>
      <Button>Design & Creative</Button>
      <Button>Customer Service</Button>
      <Button>Business Consulting</Button>
      <Button>Customer Service</Button>
      <Button>Accounting & Finance</Button>
      <Button>Legal Services</Button>
      </Box>
    </Flex>
   
  );
}

export default Categories;
