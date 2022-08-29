const toggleFavorites = (id: number)=>{
    
    let favoritesArray:  number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if(favoritesArray.includes(id)){
        // console.log('Borrando el pokemon si es lo contrario',favoritesArray)
        favoritesArray = favoritesArray.filter((item) => item !== id)
        
    }else{
        favoritesArray.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesArray))
}

const pokemonsFavorites = (): number[] =>{
    // se add el '[]' porque si no no regresa nada o null
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}


// si las funciones regresan algo es bueno escribirlo que regresan algo en este caso un booleano
const existFavorites =(id: number): boolean =>{
  // error 500 no salga, si se esta ejecutando del lado del servidor no pete
  if (typeof window === 'undefined')return false

  const favoritesArray:  number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  // si incluye regresa un pokemon sino devuelve false
  return favoritesArray.includes(id)
}


export default {
    toggleFavorites,
    existFavorites,
    pokemonsFavorites
}