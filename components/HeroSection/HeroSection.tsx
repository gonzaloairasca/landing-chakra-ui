"use client";

import {
  Stack,
  Flex,
  Button,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        align={"start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"3xl"} align={"flex-start"} spacing={6}>
          <Heading
            as={"h1"}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "6xl" })}
          >
            Una web para tu presente, el futuro para tu empresa
          </Heading>
          <Stack direction={"row"}>
            <Button bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }}>
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
