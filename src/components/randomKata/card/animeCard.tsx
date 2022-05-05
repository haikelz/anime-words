import {
  Text,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import Transition from "@/effect/transition/transition"; 

const AnimeCard = ({ kata }: { kata: any }) => {
  return (
    <>
      {kata.length > 0
        ? (
          <Transition>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
              {kata.map((kataKata: any) => (
                <Box
                  p={4}
                  borderRadius={"md"}
                  boxShadow={"lg"}
                  border={"2px"}
                  key={kataKata.id}
                >
                  <Flex alignItems={"center"}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                      {kataKata.anime}
                    </Text>
                  </Flex>
                  <Flex flexDirection={"column"} justifyContent={"center"} mt={2}>
                    <Text fontWeight={"medium"} fontSize={"lg"}>
                      {kataKata.character}
                    </Text>
                    <Text>
                      {kataKata.indo}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Transition>
        ) : (
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Image
              src={"/img/loading.svg"}
              width={"300px"}
              height={"300px"}
              alt={"Loading...."}
            />
          </Flex>
        )}
    </>
  )
}

export default AnimeCard; 