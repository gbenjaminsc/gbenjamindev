import { Box, Text, Image, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import figma from "../../assets/320px-Figma-logo.svg.png";
import git from "../../assets/Git-logo.svg";
import vscode from "../../assets/480px-Visual_Studio_Code_1.35_icon.svg.png";

export default function SobreMim() {
  return (
    <Box
      id="sobre"
      mt={10}
      mb={20}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading fontSize={45} color={"blue.900"}>
        Sobre Mim
      </Heading>
      <Wrap spacing={50} mt={10} maxW={1000} padding={4} justify={"center"}>
        <WrapItem
          display={"flex"}
          alignItems={"center"}
          textAlign={"start"}
          gap={{ base: 10, sm: 150, md: 150, lg: 200 }}
          w={"full"}
        >
          <Text as={"p"} fontSize={21} color={"blue.900"} maxWidth={600}>
            Me chamo Gabriel Benjamin, tenho 27 anos sou engenheiro químico pela
            UNIFACS. Sempre tive contato com tecnologia desde pequeno.
          </Text>
          <Image
            boxSize={{ base: 100, sm: 150, md: 150, lg: 200 }}
            src={vscode}
          ></Image>
        </WrapItem>
        <WrapItem
          display={"flex"}
          alignItems={"center"}
          textAlign={"start"}
          gap={{ base: 10, sm: 150, md: 150, lg: 200 }}
          w={"full"}
        >
          <Image
            boxSize={{ base: 100, sm: 150, md: 150, lg: 200 }}
            src={figma}
          ></Image>
          <Text as={"p"} fontSize={21} color={"blue.900"} maxWidth={600}>
            Isso me tornou entusiasta da tecnologia e consequetemente também me
            levou a mudar de área e estudar Desenvolvimento Web na Kenzie
            Academy. Hoje sou formado Desenvolvedor Front-End e estou no caminho
            para me tornar um Full-Stack.
          </Text>
        </WrapItem>
        <WrapItem
          display={"flex"}
          alignItems={"center"}
          textAlign={"start"}
          gap={{ base: 4, sm: 150, md: 150, lg: 200 }}
          w={"full"}
        >
          <Text as={"p"} fontSize={21} color={"blue.900"} maxWidth={600}>
            Atualmente sou monitor(Peer Coach) na Kenzie ajudando os alunos do
            módulo 1 e estou buscando melhorar cada vez mais profissionalmente.
            Alguns hobbies que tenho é ver meu time jogar, sair com minha
            namorada, me divertir com amigos e jogar alguns jogos no PC.
          </Text>
          <Image
            boxSize={{ base: 100, sm: 150, md: 150, lg: 200 }}
            src={git}
          ></Image>
        </WrapItem>
      </Wrap>
    </Box>
  );
}
