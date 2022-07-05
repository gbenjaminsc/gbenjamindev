import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard("gabrielbenjamin2@hotmail.com");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          toast.success("Obrigado pelo contato!");
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <Flex bg={"blue.900"} align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading fontSize={45} color={"whiteAlpha.900"}>
              Entre em Contato
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    color={"whiteAlpha.900"}
                    _hover={{
                      bg: "whiteAlpha.900",
                      color: "blue.900",
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/gbenjaminsc" target={"_blank"}>
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    color={"whiteAlpha.900"}
                    _hover={{
                      bg: "whiteAlpha.900",
                      color: "blue.900",
                    }}
                    isRound
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/gbenjamin-1/"
                  target={"_blank"}
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    color={"whiteAlpha.900"}
                    _hover={{
                      bg: "whiteAlpha.900",
                      color: "blue.900",
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={"blue.900"}
                shadow="base"
              >
                <form onSubmit={sendEmail} ref={form}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nome</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Insira seu nome"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Insira seu email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Mensagem</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Escreva sua mensagem..."
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="blue"
                      bg="blue.900"
                      color="white"
                    >
                      Enviar Mensagem
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
