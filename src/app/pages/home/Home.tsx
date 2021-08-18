import { DownloadOutlined } from '@ant-design/icons';
import { Spin, Badge, Button } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './Home.module.scss';
import { getPokemonsAsync, selectPokemons } from './home.slice';

const Home = (): JSX.Element => {
	const pokemons = useAppSelector(selectPokemons);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.pokemon_container}>
			{pokemons ? (
				pokemons.map((pokemon, idx) => (
					<Badge className={styles.pokemon} key={idx} count={idx} showZero>
						{pokemon.name}
					</Badge>
				))
			) : (
				<Spin size="large" />
			)}
			<Button
				type="primary"
				shape="circle"
				icon={<DownloadOutlined />}
				size={'large'}
				onClick={() => dispatch(getPokemonsAsync())}
			/>{' '}
		</div>
	);
};

export default Home;
