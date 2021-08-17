import React from 'react';
import { Counter } from './components/counter/Counter';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Breadcrumb, Button, DatePicker, Result } from 'antd';
import { Header } from './ui/header/Header';
import { AppPath, AppRoutes } from './routes.config';

function App(): JSX.Element {
	function renderPage(path: AppPath): JSX.Element {
		switch (path) {
			case AppPath.About:
				return (
					<div className="About">
						<DatePicker />
						<Button type="primary" style={{ marginLeft: 8 }}>
							Primary Button
						</Button>
					</div>
				);
			case AppPath.Users:
				return <>User Page</>;
			case AppPath.Counter:
				return <Counter />;
			case AppPath.Home:
				return (
					<div>
						<Breadcrumb>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>
								<a href="">Application Center</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<a href="">Application List</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>An Application</Breadcrumb.Item>
						</Breadcrumb>
					</div>
				);
			default:
				return (
					<>
						<Result
							status="404"
							title="404"
							subTitle="Sorry, the page you visited does not exist."
							extra={<Button type="primary">Back Home</Button>}
						/>
						,
					</>
				);
		}
	}

	return (
		<Router>
			<Header />
			<Switch>
				<>
					{AppRoutes.map((route) => (
						<Route exact key={route.id} path={route.path}>
							{renderPage(route.path)}
						</Route>
					))}
				</>
			</Switch>
		</Router>
	);
}

export default App;
