
import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { PokemonFavoriteCard } from "./PokemonFavoriteCard"


interface Props {
  pokemonsFavorite: number[]
}

export const PokemonFavorite: FC<Props> = ({pokemonsFavorite}) => {

  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsFavorite.map((id) => (
       <PokemonFavoriteCard key={id} id={id}/>
      ))}
     </Grid.Container>
  )
}
