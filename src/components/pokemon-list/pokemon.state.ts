import { IPokemon } from './pokemon.entity';

export const PokemonKeyFeature = 'pokemons';

export interface IPokemonState {
	pokemons: Array<IPokemon>;
	status: 'idle' | 'loading' | 'failed';
	isLoading: boolean;
}

export const initialPokemonState: IPokemonState = {
	pokemons: [],
	status: 'idle',
	isLoading: false,
};
