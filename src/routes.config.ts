export enum AppPath {
	Home = '/',
	About = '/about',
	Users = '/users',
	Counter = '/counter',
	Error = '/error',
}

export interface IPath {
	id: string;
	path: AppPath;
	content: string;
	component?: JSX.Element;
}

export const AppRoutes: Array<IPath> = [
	{
		id: 'home-page',
		path: AppPath.Home,
		content: 'Home'
	},
	{
		id: 'about-page',
		path: AppPath.About,
		content: 'About'
	},
	{
		id: 'users-page',
		path: AppPath.Users,
		content: 'Users'
	},
	{
		id: 'counter-page',
		path: AppPath.Counter,
		content: 'Counter'
	},
	{
		id: 'error-page',
		path: AppPath.Error,
		content: 'Error'
	},
];
