import { Breadcrumb, Badge } from 'antd';

import { usePokeRequester } from '../../requesters/poke-requester.hook';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
	const pokemons = usePokeRequester();

	return (
		<div className={styles.pokemon_container}>
			{pokemons
				? pokemons.results.map((pokemon, idx) => (
						<Badge className={styles.pokemon} key={idx} count={idx} showZero>
							{pokemon.name}
						</Badge>
				  ))
				: null}
		</div>
	);
};

export default Home;
