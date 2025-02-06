//import React, { useEffect, useState } from 'react'
//import apiClient from '../services/api-client';
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery
}

{/*interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}*/}

const GameGrid = ({ gameQuery }: Props) => {
    const{data, error, isLoading } = useGames(gameQuery);
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
          spacing={3}
          >
            {isLoading && 
              skeletons.map((Skeleton) => (
                 <GameCardContainer key={Skeleton}>
                      <GameCardSkeleton  />
                      </GameCardContainer>
                       ))}
            {data.map((game) =>(
              <GameCardContainer key={game.id}>
                <GameCard  game={game} />
                </GameCardContainer>
                ))}
        </SimpleGrid>
        </>
    );
}

export default GameGrid