import { Box, Text, Image, Heading } from "@chakra-ui/react";
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
      <Box padding={5} mt={10} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} alignItems={"center"} textAlign={"start"} mt={10}>
          <Text
            fontSize={21}
            as={"p"}
            color={"blue.900"}
            maxW={400}
            marginRight={20}
          >
            Me chamo Gabriel Benjamin, tenho 27 anos sou engenheiro químico pela
            UNIFACS. Sempre tive contato com tecnologia desde pequeno.
          </Text>
          <Image w={200} h={200} src={vscode}></Image>
        </Box>
        <Box display={"flex"} alignItems={"center"} textAlign={"end"} mt={10}>
          <Image w={200} h={250} src={figma}></Image>
          <Text
            as={"p"}
            fontSize={21}
            color={"blue.900"}
            maxW={400}
            marginLeft={20}
          >
            Isso me tornou entusiasta da tecnologia e consequetemente também me
            levou a mudar de área e estudar Desenvolvimento Web na Kenzie
            Academy. Hoje sou formado Desenvolvedor Front-End e estou no caminho
            para me tornar um Full-Stack.
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} textAlign={"start"} mt={10}>
          <Text
            as={"p"}
            fontSize={21}
            color={"blue.900"}
            maxW={400}
            marginRight={20}
          >
            Atualmente sou monitor(Peer Coach) na Kenzie ajudando os alunos do
            módulo 1 e estou buscando melhorar cada vez mais profissionalmente.
            Alguns hobbies que tenho é ver meu time jogar, sair com minha namorada, me divertir com
            amigos e jogar alguns jogos no PC.
          </Text>
          <Image w={200} src={git}></Image>
        </Box>
      </Box>
    </Box>
  );
}
