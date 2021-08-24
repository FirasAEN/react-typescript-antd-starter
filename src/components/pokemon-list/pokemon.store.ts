import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { PokemonExtraReducerBuilder } from './pokemon-extra.reducer';
import { PokemonRequester } from './pokemon.requester';
import { initialPokemonState, PokemonKeyFeature } from './pokemon.state';

export const getPokemonsAsync = createAsyncThunk('pokemon/fetch', async (a) => {
	return await PokemonRequester.getAllPokemons();
});

export const pokemonStore = createSlice({
	name: PokemonKeyFeature,
	initialState: initialPokemonState,
	reducers: {},
	extraReducers: (builder) =>
		new PokemonExtraReducerBuilder(builder).generateBuilder(),
});
