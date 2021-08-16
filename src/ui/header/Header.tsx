import styles from './Header.module.css';
import {Link} from "react-router-dom";
import React from "react";
import {AppRoutes} from "../../routes.config";

export const Header = () => {
	return (
		<div className={styles.header}>
			<nav className={styles.header_nav}>
				<ul className={styles.header_entries}>
					<>
						{
							AppRoutes.map(route => (
								<li key={route.id} className={styles.header_entry}>
									<Link to={route.path}>{route.content}</Link>
								</li>
							))
						}
					</>
				</ul>
			</nav>
		</div>
	);
}
