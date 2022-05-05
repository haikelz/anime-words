import { Text, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import Head from "next/head";
import DarkMode from "@/components/darkMode/darkMode";
import SearchKataCard from "@/components/searchKata/card/searchKataCard";

const SearchKata = () => {
    const [search, setSearch] = useState("");
    const [kataList, setKataList] = useState([]);

    const handleSearch = (e: any) => {
        e.preventDefault();
        getKataList(search);
    }

    // get words based on user's input(anime title)
    const getKataList = async (query: string) => {
        try {
            let response = await fetch(`https://katanime.vercel.app/api/getbyanime?anime=${query}&page=1`)
                .then(res => res.json());

            setKataList(response.result);
            console.log(response);
        } catch (err) {
            console.log(`Error cui! ${err}`);
        }
    }

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <Flex
                justifyContent={"center"}
                flexDirection={"column"}
                m={4}
            >
                <DarkMode />
                <Text 
                textAlign={"center"} 
                fontSize={"3xl"} 
                fontWeight={"bold"} 
                >Search Words</Text>
                <Flex my={4} justifyContent={"center"} alignItems={"center"}>
                    <form onSubmit={handleSearch}>
                        <Input
                            type={"search"}
                            w={64}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder={"Cari berdasarkan judul Anime"}
                            border={"2px"}
                        />
                    </form>
                </Flex>
                <SearchKataCard
                    kataList={kataList}
                />
            </Flex>
        </>
    )
}

export default SearchKata; 