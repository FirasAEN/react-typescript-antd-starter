import { useAppSelector } from '../../app/store/hooks';
import { RootState } from '../../app/store/store';
import { SliceType } from '../slice.type';
import { IPokemon } from './pokemon.entity';
import { IPokemonState, PokemonKeyFeature } from './pokemon.state';

const selectPokemons = (state: RootState): Array<IPokemon> => {
	return state[PokemonKeyFeature].pokemons;
};

const isLoading = (state: RootState): boolean =>
	state[PokemonKeyFeature].status === 'loading';

export function usePokemonSelector(): SliceType<IPokemonState> {
	return {
		status: 'idle',
		isLoading: useAppSelector(isLoading),
		pokemons: useAppSelector(selectPokemons),
	};
}
