//import React, { useEffect, useState } from 'react'
//import apiClient from '../services/api-client';
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

{/*interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}*/}

const GameGrid = () => {
    const{games, error, isLoading } = useGames();
     const skeletons = [1, 2, 3, 4, 5, 6];

  {/*  const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect( () => {
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message));
});*/}

    return (
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}}
         padding='10px'
          spacing={10}
          >
            {isLoading && 
              skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton} /> )}
            {games.map((game) =>(
                <GameCard key={game.id} game={game} />
                ))}
        </SimpleGrid>
        </>
    );
}

export default GameGrid