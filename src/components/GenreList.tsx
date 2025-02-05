
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
    const {data} = useGenres() ;

    return(
        <ul>
            {data.map(genre => <li key={genre.id}>{genre.nmae}</li>)}
        </ul>
    )

}

export default GenreList;