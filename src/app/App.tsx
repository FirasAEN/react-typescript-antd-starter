import 'antd/dist/antd.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRoute from '../components/app-router/App-Route';
import { Header } from '../components/header/Header';
import { AppRoutes } from './routes.config';

function App(): JSX.Element {
	return (
		<Router>
			<Header />
			<Switch>
				{AppRoutes.map((route) => (
					<AppRoute key={route.id} {...route} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
