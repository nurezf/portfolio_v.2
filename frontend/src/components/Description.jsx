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

const Description = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box m="2rem auto" maxW="800px" p={4} textAlign="center">
      <Heading>LET's INTRODUCE ABOUT MYSELF</Heading>
      <Text mt={4} color={textColor} fontSize="lg">
        I am a software engineer with a passion for building web applications. I
        have experience in various technologies and frameworks, including React,
        Node.js, and Python. I enjoy learning new things and collaborating with
        others to create innovative solutions.
      </Text>
      <Text mt={4} color={textColor} fontSize="lg">
        In my free time, I like to work on personal projects, contribute to
        open-source, and explore new technologies. I am always looking for new
        challenges and opportunities to grow as a developer.
      </Text>
      <Text mt={4} color={textColor} fontSize="lg">
        Feel free to reach out to me if you want to connect or collaborate on a
        project!
      </Text>
      <Text mt={4} color={textColor} fontSize="lg">
        You can find my projects on{" "}
        <a href="">
          <strong>GitHub</strong>
        </a>{" "}
        and my blog on{" "}
        <a href="">
          <strong>Medium</strong>
        </a>
        .
      </Text>
      <Button
        mt={4}
        colorScheme="blue"
        size="lg"
        bg={"transparent"}
        border="2px solid"
        borderColor={useColorModeValue("blue.500", "blue.300")}
        color={useColorModeValue("blue.500", "blue.300")}
        _hover={{
          bg: useColorModeValue("blue.600", "blue.400"),
          color: "white",
        }}
        onClick={() => {
          const link = document.createElement("a");
          link.href = "assets/a.pdf"; // Replace with your CV path
          link.download = "my_cv.pdf"; // Replace with your CV name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        Download CV
      </Button>
    </Box>
  );
};

export default Description;
