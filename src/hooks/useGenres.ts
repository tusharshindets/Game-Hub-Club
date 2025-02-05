
import useData from "./useData";

export interface Genre {
    id: number;
    nmae: string;
}


const useGenres = () => useData<Genre>('/genres');

export default useGenres;