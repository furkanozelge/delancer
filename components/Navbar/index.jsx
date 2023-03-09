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
import React from "react";
import { Inter } from "next/font/google";
import { BiMessage, BiSearch, BiStar } from "react-icons/bi";
import logo from "@/public/logo1.png";
import Image from "next/image";

function Navbar() {
  return (
    <Flex bg="gray.100" p={4} justify="space-between">
      <Box>
        <Flex>
          <Button>
            <Image ml={3} width={40} height={40} src={logo} alt="logo"></Image>
            <Text as="cite" fontSize={"xl"} pl={2}>
              delancer
            </Text>
          </Button>
          <InputGroup pl={2} ml={20}>
            <InputLeftElement pl={5} children={<BiSearch></BiSearch>} />
            <Input
              w={"3xl"}
              variant="outline"
              placeholder={"Looking for a talented freelancer? Search here!"}
            ></Input>
          </InputGroup>
        </Flex>
      </Box>
      <Box>
        <Button>
          {" "}
          <BiMessage></BiMessage>{" "}
        </Button>
        <Button>
          <BiStar></BiStar>{" "}
        </Button>
        <Button>My Orders</Button>
        <Button color={"green.500"}>Seller Mode</Button>
        <Menu>
          <MenuButton as={Button}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navbar;
