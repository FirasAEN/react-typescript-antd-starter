import { pokemonStore } from './pokemon.store';

export * from './pokemon.store';
export * from './pokemon.selector';
export * from './pokemon-extra.reducer';
export * from './pokemon.state';
export * from './pokemon.hook';
export * from './pokemon.requester';

export const pokemonReducer = pokemonStore.reducer;
export const pokemonActions = pokemonStore.actions;
