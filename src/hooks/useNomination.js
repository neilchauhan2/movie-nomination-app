import { useEffect, useState, useContext } from "react";
import { NominationContext } from "../context/NominationContext";

function useNomination(item) {
    const { nominations, addNomination } = useContext(NominationContext);
    const handleNominate = () => {
        if (nominations.length >= 5) {
            console.log("Max Limit Reached");
        } else {
            const movie = {
                imdbID: item.imdbID,
                title: item.Title,
                poster: item.Poster,
                year: item.Year
            };

            addNomination(movie);
        }
    };

    const [btnDisabled, setBtnDisabled] = useState(false);

    useEffect(() => {
        nominations.forEach((element) => {
            if (element.imdbID === item.imdbID) setBtnDisabled(true);
        });
        // eslint-disable-next-line
    }, [nominations]);
    return { handleNominate, btnDisabled };
}

export default useNomination;
