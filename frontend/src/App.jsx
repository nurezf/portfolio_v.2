import {
  Box,
  HStack,
  Heading,
  Container,
  Card,
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
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ClientResponse from "./components/ClientResponse";
import Contact from "./components/Contact";

function App() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box w="100%" minH="100vh" bg={bgColor}>
      <NavBar />
      <Hero />

      <Description> </Description>
      <Services />
      <Portfolio />
      <ClientResponse />
      <Contact />
    </Box>
  );
}

export default App;
