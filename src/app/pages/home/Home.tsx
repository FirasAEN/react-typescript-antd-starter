import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { getPokemonsAsync } from '../../../components/pokemon-list';
import PokemonList from '../../../components/pokemon-list/Pokemon-List';
import { useAppDispatch } from '../../store/hooks';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
	const dispatch = useAppDispatch();
	return (
		<div className={styles.home}>
			<PokemonList></PokemonList>
			<Button
				className={styles.downloadBtn}
				type="primary"
				shape="circle"
				icon={<DownloadOutlined />}
				size={'large'}
				onClick={() => dispatch(getPokemonsAsync())}
			/>
		</div>
	);
};

export default Home;
