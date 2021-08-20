import { DownloadOutlined } from '@ant-design/icons';
import { Spin, Badge, Button, Empty, List, Avatar } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './Home.module.scss';
import { getPokemonsAsync, selectPokemons, selectStatus } from './home.slice';

const Home = (): JSX.Element => {
	const imageBase =
		'https://raw.githubusercontent.com/PokeAPI/' +
		'sprites/master/sprites/pokemon/other/official-artwork';
	const pokemons = useAppSelector(selectPokemons);
	const isLoading = useAppSelector(selectStatus) === 'loading';
	const dispatch = useAppDispatch();
	return (
		<div className={styles.home}>
			<div className={styles.pokemon_container}>
				{!pokemons ? (
					<Empty />
				) : (
					<div>
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
					</div>
				)}
			</div>
			<Button
				className={styles.pokemon_fetch__btn}
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
