import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import RandomKata from "@/components/randomKata/randomKata";
import DarkMode from "@/components/darkMode/darkMode";

const Home = () => {
  return (
    <>
      <Head>
        <title>Kata-Kata Anime</title>
      </Head>
      <Flex justifyContent={"center"} flexDirection={"column"} m={4}>
        <DarkMode />

        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Text
            fontSize={"4xl"}
            mb={8}
            fontWeight={"bold"}
          >
            Anime Words
          </Text>
        </Flex>

        <RandomKata />

        <Flex justifyContent={"center"} alignItems={"center"}>
          <Link href="/search/">
            <Button mt={4}>
              Cari Kata
            </Button>
          </Link>
        </Flex>
        
      </Flex>
    </>
  )
}

export default Home; 
