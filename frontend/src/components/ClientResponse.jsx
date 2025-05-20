import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";

import t1 from "../assets/testimonials/t1.jpg";
import t2 from "../assets/testimonials/t2.jpg";

const ClientResponse = () => {
  return (
    <Box m={"5rem auto"} maxW="1500px" p={4} textAlign="center">
      <Container maxW="1000px" p={4} textAlign="center">
        <Heading>CLIENT RESPONSE</Heading>
        <Text>
          Is give may shall likeness made yielding spirit a itself togeth
          created after sea is in beast beginning signs open god you're
          gathering ithe
        </Text>
      </Container>
      <HStack display="flex" justifyContent="center" flexWrap="wrap">
        <Card maxW="350px" m={4} p={4} textAlign="center">
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={t1}
              borderRadius="full"
              boxSize="150px"
              alt="Dan Abramov"
            />
            <Text mt={4}>
              "I am very pleased with the work done by this developer. They were
              professional, responsive, and delivered high-quality work on time.
              I would definitely recommend them to others."
            </Text>
          </CardBody>
          <CardFooter>
            <Text as="i">--> Dan Abramov</Text>
          </CardFooter>
        </Card>
        <Card maxW="350px" m={4} p={4} textAlign="center">
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={t2}
              borderRadius="full"
              boxSize="150px"
              alt="Dan Abramov"
            />
            <Text mt={4}>
              "I am very pleased with the work done by this developer. They were
              professional, responsive, and delivered high-quality work on time.
              I would definitely recommend them to others."
            </Text>
          </CardBody>
          <CardFooter>
            <Text as="i">--> Dan Abramov</Text>
          </CardFooter>
        </Card>
        <Card maxW="350px" m={4} p={4} textAlign="center">
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={t1}
              borderRadius="full"
              boxSize="150px"
              alt="Dan Abramov"
            />
            <Text mt={4}>
              "I am very pleased with the work done by this developer. They were
              professional, responsive, and delivered high-quality work on time.
              I would definitely recommend them to others."
            </Text>
          </CardBody>
          <CardFooter>
            <Text as="i">--> Dan Abramov</Text>
          </CardFooter>
        </Card>
      </HStack>
    </Box>
  );
};

export default ClientResponse;
