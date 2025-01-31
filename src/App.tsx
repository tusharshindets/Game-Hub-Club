import { Grid, GridItem, Show } from "@chakra-ui/react";

const templateAreas = {
  base: `"nav" "main"`,
  lg: `"nav nav" "aside main"`,
};

function App() {
  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateColumns={{ base: "1fr", lg: "600px 1fr" }}
    gridTemplateRows="auto"
      //gap={4}
      p={4}
    >
      { <GridItem gridArea="nav" bg="coral" p={4}>
        Nav
      </GridItem> }
      <Show above="lg">
        <GridItem gridArea="aside" bg="gold" p={4}>
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="dodgerblue" p={4}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
