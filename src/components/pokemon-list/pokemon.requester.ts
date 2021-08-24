import axios from 'axios';

import { IPokemon } from './pokemon.entity';
import { IPokeRequester } from './pokemon.hook';

export class PokemonRequester {
	public static async getAllPokemons(): Promise<Array<IPokemon>> {
		const response = await axios.get<IPokeRequester>(
			'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
		);
		return response.data.results.map((res, idx) => {
			return { ...res, id: idx + 1 };
		});
	}
}
