import PokedexItem from '../pokedex-item/PokedexItem';
import React from 'react';

const PokemonContainer = ({ pokemons, pokemonsCaught, pokemonsUnavailable }) => {
	const POKEMON_GO_TOTAL = 493;
	const POKEMON_ID_WHITELIST = [808, 809];

	return pokemons.map((pokemon) => {
		if (POKEMON_ID_WHITELIST.includes(parseInt(pokemon.id)) ||
			pokemon.id <= POKEMON_GO_TOTAL) {
			return (<PokedexItem
				key={pokemon.id}
				pokemon={pokemon}
				caught={pokemonsCaught.includes(parseInt(pokemon.id))}
				unavailable={pokemonsUnavailable.includes(parseInt(pokemon.id))}
			/>);
		} else {
			return undefined;
		}
	}
	);
};

export default PokemonContainer;
