import {
  Box,
  HStack,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      p={4}
      bg={bgColor}
      color={textColor}
      fontSize="xl"
      fontWeight="bold"
      textAlign="center"
      lineHeight="1.5"
      fontFamily="Arial, sans-serif"
      boxShadow="md"
      borderRadius="md"
      transition="background-color 0.3s ease"
      _hover={{ backgroundColor: useColorModeValue("gray.100", "gray.700") }}
    >
      <Box
        as="h1"
        fontSize={{ base: "2xl", md: "60px" }}
        fontWeight="bold"
        mb={4}
      >
        Welcome I'm NUREDIN FENTAW
      </Box>
      <Box as="p" fontSize={{ base: "md", md: "lg" }} mb={8}>
        Fullstack Developer
        <br />I create beautiful and functional web applications.
      </Box>
      <HStack>
        <Box
          as="button"
          bg={useColorModeValue("blue.500", "blue.300")}
          color={useColorModeValue("white", "gray.800")}
          px={4}
          py={2}
          borderRadius="md"
          fontSize="lg"
          fontWeight="bold"
          _hover={{
            bg: useColorModeValue("blue.600", "blue.400"),
            transform: "scale(1.05)",
          }}
          transition="background-color 0.3s ease, transform 0.3s ease"
        >
          HIRE ME
        </Box>
        <Box
          as="button"
          bg={"transparent"}
          color={textColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="2px"
          borderColor={useColorModeValue("blue.500", "blue.300")}
          _hover={{
            bg: useColorModeValue("blue.500", "blue.300"),
            color: useColorModeValue("white", "gray.800"),
            transform: "scale(1.05)",
          }}
          transition="background-color 0.3s ease, transform 0.3s ease"
          fontSize="lg"
          fontWeight="bold"
          _hover={{
            bg: useColorModeValue("blue.600", "blue.400"),
            color: useColorModeValue("white", "gray.800"),
            transform: "scale(1.05)",
          }}
          transition="background-color 0.3s ease, transform 0.3s ease"
        >
          GET CV
        </Box>
      </HStack>
    </Box>
  );
};

export default Hero;
