import { GridItem,Grid,Show, HStack, Flex, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  Platform: platform | null;
  sortOrder: string;
  searchText: string;
}

function App(){
  const [gemeQuery, setGameQuery ] =  useState<GameQuery>({} as GameQuery);
{/*const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
 const [selectedPlatform, setSelectedPlatform ] = useState<platform | null >(null);*/}

  return (
    <Grid 
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `,
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    > 
   <GridItem area="nav">
    <NavBar onSearch={(searchText) => setGameQuery ({ ...gemeQuery, searchText})} />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside">
      <GenreList selectedGenre={gemeQuery.genre} onSelectGenre={(genre) => setGameQuery({...gemeQuery, genre})} />
      </GridItem>
      </Show>
    <GridItem area="main"> 
    <Flex padding={2} marginBottom={5}>
      <Box marginRight={5}>
       <PlatformSelector selectedPlatform={gemeQuery.Platform} onSelctPlatform={(Platform) => setGameQuery({...gemeQuery, Platform}) } />
       </Box>
        <SortSelector sortOrder={gemeQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gemeQuery, sortOrder})} />
        </Flex>
        <GameGrid gameQuery={gemeQuery} />
      </GridItem>
      </Grid>
  );
}

export default App;