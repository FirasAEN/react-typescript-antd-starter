import axios from 'axios';
import { useEffect, useState } from 'react';

export interface IPokeRequester {
	count: number;
	next: string;
	previous: string;
	results: Array<{ name: string; url: string }>;
}

export function usePokeRequester(): IPokeRequester | undefined {
	const [pokes, setPokes] = useState<IPokeRequester>();

	useEffect(() => {
		(async function () {
			try {
				const response = await axios.get<IPokeRequester>(
					'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
				);
				setPokes(response.data);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	return pokes;
}
