import { useEffect, useState } from "react";
import AnimeCard from "./card/animeCard";

const RandomKata = () => {
    const [kata, setKata] = useState([]);

    // get random words 
    const getKata = async () => {
        try {
            let response = await fetch("https://katanime.vercel.app/api/getrandom")
                .then(res => res.json());

            setKata(response.result);
            console.log(response);
        } catch (err) {
            console.log(`Error cui! ${err}`);
        }
    }

    useEffect(() => {
        getKata();
    }, []);

    return (
        <>
            <AnimeCard
                kata={kata}
            />
        </>
    )
}

export default RandomKata; 