import { Route } from 'react-router-dom';

import { IRoute } from '../../app/routes.config';
import styles from './App-Route.module.scss';

const AppRoute = (prop: IRoute): JSX.Element => {
	const CustomComponent = prop.component;
	return (
		<Route
			exact
			path={prop.path}
			render={(internalProps) => {
				return CustomComponent ? (
					<div className={styles.app_content}>
						<CustomComponent {...internalProps} routes={prop.subRoutes} />
					</div>
				) : (
					<span>Can not render component</span>
				);
			}}
		/>
	);
};

export default AppRoute;
