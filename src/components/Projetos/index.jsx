import { Wrap, WrapItem } from "@chakra-ui/react";
import Projects from "../../database/database";
import SocialProfileSimple from "../Cards";

export default function Projetos() {
  return (
    <Wrap id="projetos" spacing={10} justify={"center"}>
      {Projects.map(({ title, description, link, github, image }, index) => {
        return (
          <WrapItem>
            <SocialProfileSimple
              key={index}
              {...{ title, description, link, github, image }}
            ></SocialProfileSimple>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
