import {
  Box,
  Text,
  Image,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
        <Wrap ml={{ base: 0, sm: 100 }} spacing={{ base: 350, sm: 100 }}>
          <WrapItem
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            alignSelf={"center"}
          >
            <Heading fontSize={36} color={"whiteAlpha.900"}>
              Gabriel Benjamin
            </Heading>
            <Heading fontSize={36} color={"whiteAlpha.900"}>
              Souza de Carvalho
            </Heading>
            <Text fontSize={20} color={"whiteAlpha.900"}>
              Front End Developer
            </Text>
            <Text fontSize={20} color={"whiteAlpha.900"}>
              Buscando sempre melhorar.
            </Text>
          </WrapItem>
          <WrapItem>
            <Image borderRadius={75} w={275} src={foto}></Image>
          </WrapItem>
        </Wrap>
    </Box>
  );
}
