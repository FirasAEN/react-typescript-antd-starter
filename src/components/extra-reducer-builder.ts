import { ActionReducerMapBuilder } from '@reduxjs/toolkit/src/mapBuilders';
import { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';

export type ReducerBuilder<S> = ActionReducerMapBuilder<NoInfer<S>>;

export abstract class ExtraReducerBuilder<S> {
	public abstract generateBuilder(builder: ReducerBuilder<S>): void;
}
