import React from 'react';
import { Link } from 'react-router-dom';

import { AppPath } from '../../app/routes.config';
import styles from './App-Link.module.scss';

interface IAppLink {
	route: AppPath;
	title: string;
	iconComponent: React.ComponentType<any>;
}

const AppLink: React.FunctionComponent<IAppLink> = (props) => {
	return (
		<Link className={styles.app_link} to={props.route}>
			<props.iconComponent className={styles.app_link_icon} />
			{props.title}
		</Link>
	);
};

export default AppLink;
