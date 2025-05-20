import {
  Box,
  HStack,
  Heading,
  Container,
  Card,
  Image,
  Text,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  CardBody,
  CardFooter,
  ButtonGroup,
  Divider,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import s1 from "../assets/services/s1.png";
import s2 from "../assets/services/s2.png";
import s3 from "../assets/services/s3.png";
import s4 from "../assets/services/s4.png";

const Services = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const cardHover = useColorModeValue("white", "gray.600");
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      m="5rem auto"
      maxW="1500px"
      p={4}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      color={textColor}
    >
      <Heading>SERVICE OFFERS</Heading>
      <Text mt={4} fontSize="lg" maxW="800px">
        I offer a range of services to help you achieve your goals. Whether you
        need a new website, a mobile app, or help with your existing projects, I
        am here to help.
      </Text>
      <Container maxW="1000px" mt={8} p={4}>
        <HStack
          spacing={5}
          mt={4}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Card
            w="900px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
              bg: cardHover,
            }}
            bg={cardBg}
            boxShadow="xl"
            borderRadius="lg"
            borderWidth="1px"
            borderColor={cardBorder}
            ml={{ base: "2", md: "0" }}
            mr={{ base: "2", md: "0" }}
          >
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <Image src={s1} alt="service 1" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Web Development</Heading>
                <Text>
                  I build responsive and user-friendly websites using the latest
                  technologies.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  see projects
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card
            w="900px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
              bg: cardHover,
            }}
            bg={cardBg}
            boxShadow="xl"
            borderRadius="lg"
            borderWidth="1px"
            borderColor={cardBorder}
          >
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <Image src={s2} alt="service 2" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Project Manager</Heading>
                <Text>
                  I manage projects from start to finish, ensuring they are
                  completed on time and within budget.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  see projects
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card
            w="900px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
              bg: cardHover,
            }}
            bg={cardBg}
            boxShadow="xl"
            borderRadius="lg"
            borderWidth="1px"
            borderColor={cardBorder}
          >
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <Image src={s3} alt="service 1" />
              <Stack mt="6" spacing="3">
                <Heading size="md">mobile app</Heading>
                <Text>
                  I develop mobile applications for both iOS and Android
                  platforms.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  see projects
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </HStack>
      </Container>
    </Box>
  );
};

export default Services;
