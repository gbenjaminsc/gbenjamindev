import { Wrap, WrapItem, Box, Heading } from "@chakra-ui/react";
import Projects from "../../database/database";
import SocialProfileSimple from "../../components/Cards";

export default function Projetos() {
  return (
    <Box display={'flex'}
     flexDirection={'column'}
     alignItems={'center'}
     >
      <Heading mt={10} fontSize={45} color={"blue.900"}>
        Projetos
      </Heading>
      <Wrap id="projetos" spacing={10} justify={"center"} mt={10} maxW={1200} padding={2}>
        {Projects.map(({ title, description, link, github, image }, index) => {
          return (
            <WrapItem key={index}>
              <SocialProfileSimple
                {...{ title, description, link, github, image }}
              ></SocialProfileSimple>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
}
