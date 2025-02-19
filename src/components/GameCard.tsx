import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface props {
    game: Game
}

const GameCard = ({ game }: props) => {
    return (
            <Card>
            <Image src={getCroppedImageUrl (game.background_image)} />
            <CardBody>
                  <HStack justifyContent='space-between' marginBottom={3}>
              {/*  {game.parent_platforms.map( ({platform}) => <Text>{platform.name}</Text>)} */}
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic} />
                 </HStack>
                 <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard