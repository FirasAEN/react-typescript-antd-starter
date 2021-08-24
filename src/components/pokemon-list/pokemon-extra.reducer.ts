import { ExtraReducerBuilder, ReducerBuilder } from '../extra-reducer-builder';
import { IPokemonState } from './pokemon.state';
import { getPokemonsAsync } from './pokemon.store';

export class PokemonExtraReducerBuilder<
	T extends IPokemonState,
> extends ExtraReducerBuilder<T> {
	public constructor(private builder: ReducerBuilder<T>) {
		super();
	}

	private onGetPokemonPending(): this {
		this.builder.addCase(getPokemonsAsync.pending, (state) => {
			state.status = 'loading';
		});
		return this;
	}

	private onGetPokemonFulfilled(): this {
		this.builder.addCase(getPokemonsAsync.fulfilled, (state, action) => {
			state.status = 'idle';
			state.pokemons = action.payload;
		});
		return this;
	}

	public generateBuilder(): void {
		this.onGetPokemonFulfilled().onGetPokemonPending();
	}
}
