import { useEffect, useState } from 'react';

import { IPokemon } from './pokemon.entity';
import { PokemonRequester } from './pokemon.requester';

export interface IPokeRequester {
	count: number;
	next: string;
	previous: string;
	results: Array<{ name: string; url: string }>;
}

export function usePokeRequester(): Array<IPokemon> {
	const [pokemons, setPokemons] = useState<Array<IPokemon>>([]);

	useEffect(() => {
		(async function () {
			try {
				const list = await PokemonRequester.getAllPokemons();
				setPokemons(list);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		})();
	}, []);

	return pokemons;
}
