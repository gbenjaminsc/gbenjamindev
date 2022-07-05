import { Wrap, Box, WrapItem, Heading, Text } from "@chakra-ui/react";
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
      <Heading mt={10} fontSize={45}>
        Skills
      </Heading>
      <Wrap
        mt={20}
        ml={5}
        mb={10}
        flexWrap={"wrap"}
        maxW={1000}
        spacing={100}
        alignSelf={"center"}
      >
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <IoLogoJavascript size={150}></IoLogoJavascript>
          <Text>Javascript</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <SiTypescript
            size={150}
          ></SiTypescript>
          <Text>Typescript</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <IoLogoReact size={150}></IoLogoReact>
          <Text>React</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <SiRedux size={150}></SiRedux>
          <Text>Redux</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <IoLogoHtml5 size={150}></IoLogoHtml5>
          <Text>HTML</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <IoLogoCss3 size={150}></IoLogoCss3>
          <Text>CSS</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <SiChakraui size={150}></SiChakraui>
          <Text>Chakra UI</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <SiMaterialui size={150}></SiMaterialui>
          <Text>Material UI</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <SiMysql size={150}></SiMysql>
          <Text>MySQL</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <IoLogoNodejs size={150}></IoLogoNodejs>
          <Text>Node.js</Text>
        </WrapItem>
        <WrapItem
          padding={2}
          _hover={{ transform: "scale(1.1)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <SiNodemon size={150}></SiNodemon>
          <Text>Nodemon</Text>
        </WrapItem>
      </Wrap>
    </Box>
  );
}
