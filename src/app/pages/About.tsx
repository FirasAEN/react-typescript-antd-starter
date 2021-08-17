import { Button, DatePicker } from 'antd';

const About = (): JSX.Element => {
	return (
		<div className="About">
			<DatePicker />
			<Button type="primary" style={{ marginLeft: 8 }}>
				Primary Button
			</Button>
		</div>
	);
};

export default About;
