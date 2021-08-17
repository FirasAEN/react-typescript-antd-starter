import { Breadcrumb } from 'antd';

const Home = (): JSX.Element => {
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
};

export default Home;
