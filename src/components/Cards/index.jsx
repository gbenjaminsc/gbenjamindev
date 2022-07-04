import {
  Heading,
  Image,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileSimple({
  title,
  description,
  link,
  github,
  image,
}) {
  console.log("a");
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={"blue.900"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={4}
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Image alignSelf={"center"} src={image} borderRadius={12} />
        <Heading
          mt={4}
          fontSize={"2xl"}
          fontFamily={"body"}
          color={"whiteAlpha.900"}
        >
          {title}
        </Heading>
        <Text
          noOfLines={5}
          mt={4}
          textAlign={"center"}
          color={useColorModeValue("whiteAlpha.900", "gray.400")}
          px={3}
        >
          {description}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            onClick={() => window.open(github, "_blank")}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "whiteAlpha.900",
            }}
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.open(link, "_blank")}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"whiteAlpha.900"}
            color={"blue.900"}
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Site
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
