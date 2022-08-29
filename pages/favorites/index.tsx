
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { PokemonFavorite } from "../../components/pokemon";
import { NoFavorites } from '../../components/ui';
import { localFavorites } from "../../utils";


const FavoritesPage = () => {

  const [pokemonsFavorite, setPokemonsFavorites] = useState<number[]>([])

  useEffect(() => {
    setPokemonsFavorites(localFavorites.pokemonsFavorites())
  },[])

  return (
   <Layout title="Pokémons - favoritos">
    {pokemonsFavorite.length === 0 ? (
     <NoFavorites />
    ) : (
     <PokemonFavorite pokemonsFavorite={pokemonsFavorite}/>
    )}
   </Layout>
  );
}

export default FavoritesPage