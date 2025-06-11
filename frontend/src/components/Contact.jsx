import {
  Box,
  Container,
  Text,
  Heading,
  Stack,
  Link,
  Input,
  Button,
  useColorModeValue,
  useColorMode,
  Icon,
  HStack,
  Card,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { FaGithub, FaPhone, FaLinkedin, FaTelegram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box m={4} textAlign="center" bgColor="gray.50" p={4} borderRadius="md">
      <Heading mb={4} color={textColor}>
        LET'S CONNECT
      </Heading>
      <HStack>
        <Container>
          <Text mb={6} color={textColor}>
            I am always open to new opportunities and collaborations. If you
            have a project in mind or just want to chat, feel free to reach out.
          </Text>
          <List spacing={3} textAlign="left" color={textColor}>
            <ListItem>
              <ListIcon as={FaPhone} color="blue.500" />
              +251-965-102-990
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineMail} color="blue.500" />
              <Link href=" nuredin.fentaw.z@gmail.com">
                {" "}
                nuredin.fentaw.z@gmail.com
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} color="blue.500" />
              <Link href="https://www.linkedin.com/in/nuredin-fentaw-04b560365">
                Nuredin Fentaw
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaTelegram} color="blue.500" />
              <Link href="https://t.me/nurezf"> Nuredin Fentaw</Link>
            </ListItem>
          </List>
        </Container>
        <Container>
          <Text mb={6} color={textColor}>
            I would love to hear from you! Whether you have a question, want to
            collaborate, or just want to say hi, feel free to reach out.
          </Text>
          <Container>
            <Stack>
              <Input placeholder="name" size="lg" />
              <Input placeholder="email" type="email" size="lg" />
              <Input placeholder="description" size="lg" />
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
                send
              </Box>
            </Stack>
          </Container>
        </Container>
      </HStack>
    </Box>
  );
};

export default Contact;
