import { Box, Flex, Text, Image } from "@chakra-ui/react";
import foto from "../../assets/foto2.png";

export default function Inicio() {
  return (
    <Box
      id="inicio"
      boxShadow={"inner"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      bg={"blue.900"}
      h={1024}
    >
      <Flex display={"flex"} flexDirection={"column"} alignItems={"start"}>
        <Text fontSize={36} color={"whiteAlpha.900"}>
          Gabriel Benjamin
        </Text>
        <Text fontSize={36} color={"whiteAlpha.900"}>
          Souza de Carvalho
        </Text>
        <Text fontSize={20} color={"whiteAlpha.900"}>
          Front End Developer
        </Text>
        <Text fontSize={20} color={"whiteAlpha.900"}>
          Buscando sempre melhorar.
        </Text>
      </Flex>
      <Image borderRadius={75} w={275} src={foto}></Image>
    </Box>
  );
}
