
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: platform}[];
    metacritic: number;
}



const useGames = (gameQuery: GameQuery ) => 
    useData<Game>('/games',
         { 
        params: { 
            genres: gameQuery.genre?.id,
             Platforms: gameQuery.Platform?.id,
             ordering: gameQuery.sortOrder
            },
        },
        [gameQuery] 
    );

export default useGames;