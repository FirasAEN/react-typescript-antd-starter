import React from 'react';
import { Link } from 'react-router-dom';

import styles from './App-Link.module.scss';

interface IAppLink {
	route: string;
	title: string;
}

const AppLink: React.FunctionComponent<IAppLink> = (props) => {
	return (
		<Link className={styles.app_link} to={props.route}>
			<div className={styles.app_link_icon}>{props.children}</div>
			{props.title}
		</Link>
	);
};

export default AppLink;
