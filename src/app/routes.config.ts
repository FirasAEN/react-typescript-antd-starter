import React from 'react';

import { Counter } from '../components/counter/Counter';
import About from './pages/About';
import Error from './pages/Error';
import Users from './pages/Users';
import Home from './pages/home/Home';

// eslint-disable-next-line no-shadow
export enum AppPath {
	HOME = '/home',
	ABOUT = '/about',
	USERS = '/users',
	COUNTER = '/counter',
	ERROR = '/error',
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
		path: AppPath.HOME,
		component: Home,
		name: 'Home',
	},
	{
		id: 'about-page',
		path: AppPath.ABOUT,
		component: About,
		name: 'About',
	},
	{
		id: 'users-page',
		path: AppPath.USERS,
		component: Users,
		name: 'Users',
	},
	{
		id: 'counter-page',
		path: AppPath.COUNTER,
		component: Counter,
		name: 'Counter',
	},
	{
		id: 'error-page',
		path: AppPath.ERROR,
		component: Error,
		name: 'Error',
	},
];
