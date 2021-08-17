import {
	HomeOutlined,
	RadarChartOutlined,
	UserOutlined,
	CalculatorOutlined,
	SettingFilled,
} from '@ant-design/icons';
import React from 'react';

import { AppPath, AppRoutes } from '../../app/routes.config';
import logo from '../../img/logo.svg';
import AppLink from '../../ui/app-icon/App-Link';
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
					{AppRoutes.map((route) => (
						<AppLink key={route.id} route={route.path} title={route.name}>
							{renderIconFragment(route.path)}
						</AppLink>
					))}
				</div>
			</nav>
		</div>
	);
};
