import { Link } from 'react-router-dom';

import { AppRoutes } from '../../routes.config';
import styles from './Header.module.css';

export const Header = (): JSX.Element => {
	return (
		<div className={styles.header}>
			<nav className={styles.header_nav}>
				<ul className={styles.header_entries}>
					<>
						{AppRoutes.map((route) => (
							<li key={route.id} className={styles.header_entry}>
								<Link to={route.path}>{route.content}</Link>
							</li>
						))}
					</>
				</ul>
			</nav>
		</div>
	);
};
