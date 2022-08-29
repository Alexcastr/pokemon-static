import { Grid, Card } from '@nextui-org/react'
import { FC } from 'react'
import { useRouter } from 'next/router';

interface Props {
  id: number
}

export const PokemonFavoriteCard:FC<Props> = ({id}) => {

  const router = useRouter();

   function pokemonOnClick(){
    router.push(`/pokemon/${id}`);
  }

  return (
    <Grid 
    onClick={pokemonOnClick}
    xs={6} sm={3} md={2} xl={1} key={id}>
    <Card isHoverable isPressable css={{ padding: 10 }}>
     <Card.Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      width={"100%"}
      height={140}
     />
    </Card>
   </Grid>
  )
}
