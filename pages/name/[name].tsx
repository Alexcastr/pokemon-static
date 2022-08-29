import { useState } from 'react';
import Image from 'next/image';
import type { NextPage,GetStaticProps, GetStaticPaths } from 'next'

import { Button, Card, Grid, Text,Container } from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { pokeApiName } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';
import confetti from 'canvas-confetti'



interface Props{
  pokemon: Pokemon
}

const PokemonByNamePAge:NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existFavorites(pokemon.id));
  
  const onToggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id);
    if(isInFavorites){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
    // para que se actualice el estado de favoritos, el componente texto
    setIsInFavorites(!isInFavorites);
  }

  return (
   <Layout title={pokemon.name}>
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
     <Grid xs={12} sm={4}>
      <Card isHoverable css={{ padding: "30px" }}>
       <Card.Body>
        <Card.Image
         src={
          pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
         }
         alt={pokemon.name}
         width="100%"
         height={200}
        />
       </Card.Body>
      </Card>
     </Grid>
     <Grid xs={12} sm={8}>
      <Card>
       <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
        <Text h1 transform="capitalize">
         {pokemon.name}
        </Text>
        <Button  
        onClick={onToggleFavorites}
        color="gradient" ghost={!isInFavorites}>
          {isInFavorites ? "En favoritos" : "Adicionar en favoritos"}
         
        </Button>
       </Card.Header>
       <Card.Body>
        <Text size={30}>Sprites: </Text>
        <Container direction="row" display="flex" justify='space-between'>
         <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={80}
          height={80}
         />
         <Image
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          width={80}
          height={80}
         />
         <Image
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          width={80}
          height={80}
         />
         <Image
          src={pokemon.sprites.back_shiny}
          alt={pokemon.name}
          width={80}
          height={80}
         />
        </Container>
       </Card.Body>
      </Card>
     </Grid>
    </Grid.Container>
   </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApiName.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonNames.map(name => ({ 
      params: { name } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {name} = params as {name: string};
  const {data} = await pokeApiName.get<Pokemon>(`/pokemon/${name}`);
  
  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonByNamePAge;