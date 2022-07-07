import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { nome: "Início", id: "#inicio" },
  { nome: "Sobre mim", id: "#sobre" },
  { nome: "Skills", id: "#skills" },
  { nome: "Projetos", id: "#projetos" },
  { nome: "Contato", id: "#contato" },
];

const NavLink = ({ children , id}) => (
  <Link
    fontSize={20}
    px={10}
    color={useColorModeValue("whiteAlpha.900", "whiteAlpha.700")}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
      color: useColorModeValue("blue.900", "blue.900"),
    }}
    href={id}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderBottom={"1px solid white"}
        bg={useColorModeValue("blue.900", "blue.900")}
        px={4}
        scrollBehavior={'smooth'}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            alignItems={"center"}
            justifyContent={"center"}
            width={"full"}
          >
            <HStack 
              as={"nav"}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({nome, id}) => (
                <NavLink key={nome} id={id}>{nome}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({nome, id}) => (
                <NavLink key={nome} id={id}>{nome}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
