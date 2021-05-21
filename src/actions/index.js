import PokeApi from '../api/PokeApi';

export const searchPokemon = (pokemon)=>{

    //const response = PokeApi.get(`/pokemon/${pokemon}`,{});
    console.log(pokemon);
    return {
        type: 'POKE_SEARCH',
        payload: pokemon
    }
};