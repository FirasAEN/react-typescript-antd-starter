import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from '../../components/counter/counterSlice';
import {
	PokemonKeyFeature,
	pokemonReducer,
} from '../../components/pokemon-list';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[PokemonKeyFeature]: pokemonReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
