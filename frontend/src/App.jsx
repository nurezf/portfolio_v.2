import {
  Box,
  HStack,
  Heading,
  Text,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Description from "./components/Description";

function App() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box w="100%" minH="100vh" bg={bgColor}>
      <NavBar />
      <Hero />

      <Description> </Description>
    </Box>
  );
}

export default App;
