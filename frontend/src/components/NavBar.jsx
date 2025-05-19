import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      maxW="container.xl"
      position="fixed"
      top={0}
      left={0}
      bg={bgColor}
      zIndex={1}
    >
      <HStack justify="space-between" p={4}>
        <Heading
          bgGradient="linear(to-l, #7B9FF3, #3353F8)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          NUREDIN
        </Heading>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {[
            "HOME",
            "ABOUT",
            "SERVICES",
            "PORTFOLIO",
            " pages",
            "BLOG",
            "CONTACT",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "blue.400" }}
            >
              {item}
            </Link>
          ))}
        </HStack>

        <HStack>
          <IconButton
            display={{
              base: "flex",
              md: "none",
            }}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            aria-label="Menu"
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  {[
                    "HOME",
                    "ABOUT",
                    "SERVICES",
                    "PORTFOLIO",
                    "BLOG",
                    "CONTACT",
                  ].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      fontWeight="medium"
                      color={textColor}
                      _hover={{ color: "blue.400" }}
                    >
                      {item}
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </HStack>
    </Container>
  );
};

export default NavBar;
