import React from 'react';

import { Counter } from '../components/counter/Counter';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Users from './pages/Users';

export enum AppPath {
	Home = '/home',
	About = '/about',
	Users = '/users',
	Counter = '/counter',
	Error = '/error',
}

export interface IRoute {
	id: string;
	path: AppPath;
	name: string;
	component?: React.ComponentType<any>;
	subRoutes?: Array<IRoute>;
}

export const AppRoutes: Array<IRoute> = [
	{
		id: 'home-page',
		path: AppPath.Home,
		component: Home,
		name: 'Home',
	},
	{
		id: 'about-page',
		path: AppPath.About,
		component: About,
		name: 'About',
	},
	{
		id: 'users-page',
		path: AppPath.Users,
		component: Users,
		name: 'Users',
	},
	{
		id: 'counter-page',
		path: AppPath.Counter,
		component: Counter,
		name: 'Counter',
	},
	{
		id: 'error-page',
		path: AppPath.Error,
		component: Error,
		name: 'Error',
	},
];
