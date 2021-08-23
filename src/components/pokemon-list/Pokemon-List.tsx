import { Avatar, Empty, List } from 'antd';

import { useAppSelector } from '../../app/store/hooks';
import styles from './Pokemon-List.module.scss';
import { selectPokemons, selectStatus } from './Pokemon.slice';

const PokemonList = (): JSX.Element => {
	const imageBase =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
	const pokemons = useAppSelector(selectPokemons);
	const isLoading = useAppSelector(selectStatus) === 'loading';

	return (
		<div className={styles.pokemon_container}>
			{!pokemons ? (
				<Empty />
			) : (
				<List
					grid={{ gutter: 16, column: 7 }}
					itemLayout="horizontal"
					dataSource={pokemons}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								avatar={
									<Avatar size={80} src={`${imageBase}/${item.id}.png`} />
								}
								title={<a href="https://ant.design">{item.name}</a>}
							/>
						</List.Item>
					)}
				/>
			)}
		</div>
	);
};

export default PokemonList;
