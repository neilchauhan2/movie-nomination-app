import { useEffect, useState, useContext } from "react";
import { NominationContext } from "../context/NominationContext";
import { toast } from "react-toastify";

const useNomination = (item) => {
    toast.configure();
    const { nominations, addNomination } = useContext(NominationContext);
    const handleNominate = () => {
        if (nominations.length >= 5) {
            toast.error("You can nominate only 5 movies.");
        } else {
            const movie = {
                imdbID: item.imdbID,
                title: item.Title,
                poster: item.Poster,
                year: item.Year
            };

            addNomination(movie);
            toast.success(
                `Your nomination for ${movie.title} has been successfully recorded.`
            );
        }
    };

    const [btnDisabled, setBtnDisabled] = useState(false);

    useEffect(() => {
        nominations.forEach((element) => {
            if (element.imdbID === item.imdbID) setBtnDisabled(true);
        });
        // eslint-disable-next-line
    }, [nominations, item]);
    return { handleNominate, btnDisabled };
};

export default useNomination;
