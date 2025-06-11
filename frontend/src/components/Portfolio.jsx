import {
  Box,
  HStack,
  Container,
  Card,
  CardBody,
  Image,
  Text,
  ButtonGroup,
  useColorModeValue,
  VStack,
  Heading,
  Grid,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p2.jpg";
import p3 from "../assets/portfolio/p3.jpg";
import p4 from "../assets/portfolio/p4.jpg";
import p5 from "../assets/portfolio/p5.jpg";
import p6 from "../assets/portfolio/p6.jpg";
import p7 from "../assets/portfolio/p7.jpg";

const Portfolio = () => {
  return (
    <Box>
      <VStack textAlign="center" mt={8} mb={8}>
        <Heading>PORTFOLIO</Heading>
        <Text mt={4} fontSize="lg" maxW="1000px">
          Here are some of the projects I have worked on. Each project is a
          testament to my skills and dedication to delivering high-quality work.
          I take pride in my ability to adapt to different technologies and
          frameworks, ensuring that I can meet the unique needs of each project.
        </Text>
      </VStack>
      <Container maxW="1000px" mt={8}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p1} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                game hub
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p2} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                Project 1 Description
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p3} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                Project 1 Description
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p4} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                Project 1 Description
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p5} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                Project 1 Description
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p6} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                Project 1 Description
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
            }}
          >
            <CardBody>
              <Image src={p7} alt="Project 1" borderRadius="lg" />
              <Text mt={4} fontSize="lg">
                Project 1 Description
              </Text>
              <ButtonGroup mt={4}>
                <Button colorScheme="blue">
                  <Icon as={MdOutlineRemoveRedEye} mr={2} />
                  Live Demo
                </Button>
                <Button colorScheme="teal">
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
