import { Wrap, Box, WrapItem, Text } from "@chakra-ui/react";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io5";
import {
  SiTypescript,
  SiRedux,
  SiNodemon,
  SiChakraui,
  SiMysql,
  SiMaterialui,
} from "react-icons/si";

export default function Skills() {
  return (
    <Box
      id="skills"
      bg={"blue.900"}
      color={"whiteAlpha.900"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Text mt={10} fontSize={45}>
        Skills
      </Text>
      <Wrap mt={10} padding={20} flexWrap={'wrap'} maxW={800} spacing={50}>
        <WrapItem>
          <IoLogoJavascript size={150}></IoLogoJavascript>
        </WrapItem>
        <WrapItem>
          <SiTypescript size={150}></SiTypescript>
        </WrapItem>
        <WrapItem>
          <IoLogoReact size={150}></IoLogoReact>
        </WrapItem>
        <WrapItem>
          <SiRedux size={150}></SiRedux>
        </WrapItem>
        <WrapItem>
          <IoLogoHtml5 size={150}></IoLogoHtml5>
        </WrapItem>
        <WrapItem>
          <IoLogoCss3 size={150}></IoLogoCss3>
        </WrapItem>
        <WrapItem>
          <SiChakraui size={150}></SiChakraui>
        </WrapItem>
        <WrapItem>
          <SiMaterialui size={150}></SiMaterialui>
        </WrapItem>
        <WrapItem>
          <SiMysql size={150}></SiMysql>
        </WrapItem>
        <WrapItem>
          <IoLogoNodejs size={150}></IoLogoNodejs>
        </WrapItem>
        <WrapItem>
          <SiNodemon size={150}></SiNodemon>
        </WrapItem>
      </Wrap>
    </Box>
  );
}
