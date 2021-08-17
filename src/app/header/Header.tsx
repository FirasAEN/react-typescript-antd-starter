import {
	HomeOutlined,
	RadarChartOutlined,
	UserOutlined,
	CalculatorOutlined,
	SettingFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import { AppPath, AppRoutes } from '../routes.config';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
	function renderIconFragment(path: AppPath): JSX.Element {
		switch (path) {
			case AppPath.About:
				return <RadarChartOutlined />;
			case AppPath.Users:
				return <UserOutlined />;
			case AppPath.Counter:
				return <CalculatorOutlined />;
			case AppPath.Home:
				return <HomeOutlined />;
			default:
				return <SettingFilled />;
		}
	}

	return (
		<div className={styles.header}>
			<nav className={styles.header_nav}>
				<img src={logo} className={styles.header_logo} alt="logo" />
				<div className={styles.header_entries}>
					<>
						{AppRoutes.map((route) => (
							<div key={route.id} className={styles.header_entry}>
								<div className={styles.header_entry_icon}>
									{renderIconFragment(route.path)}
								</div>
								<Link to={route.path}>{route.content}</Link>
							</div>
						))}
					</>
				</div>
			</nav>
		</div>
	);
};
