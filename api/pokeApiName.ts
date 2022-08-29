import axios from 'axios'

const pokeApiName = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
})

export default pokeApiName;