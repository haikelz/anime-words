import { Flex, Button, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

const SearchKataCard = ({ kataList }: { kataList: any }) => {

  // copy button
  const copy = (kalimat: string) => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = kalimat;

    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {kataList.map((kata: any) => (
          <Box
            p={4}
            borderRadius={"md"}
            boxShadow={"lg"}
            border={"2px"}
            key={kata.id}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {kata.anime}
              </Text>
              <Flex
                flexWrap={"wrap"}
                p={1}
                justifyContent={"center"}
                fontWeight={"semibold"}
              >
                <Button
                  cursor={"pointer"}
                  px={3}
                  colorScheme={"facebook"}
                  borderRadius={"sm"}
                  onClick={() => copy(kata.indo)}
                >Copy</Button>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} justifyContent={"center"} mt={2}>
              <Text
                fontWeight={"medium"}
                fontSize={"lg"}
              >
                {kata.character}
              </Text>
              <Text>{kata.indo}</Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Link href="/">
        <Button mt={4}>
          Back to Home
        </Button>
      </Link>
    </Flex>
  )
}

export default SearchKataCard; 