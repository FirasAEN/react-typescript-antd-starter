export type SliceType<T> = {
	[k in keyof T]: T[k];
};
