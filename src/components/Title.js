import React from 'react';
import LaptopImage from '../images/undraw_web_development_w2vv.svg';
import SowmyaImage from '../images/sowmyaImage.jpg';

const Title = () => {
	return (
		<div className="title-container">
			<img className="header-image" src={SowmyaImage} alt="myphoto" />
			<img className="web-app-image" src={LaptopImage} alt="laptop" />

			<h1>sowmya mannem</h1>
			<h3 className="title-headingtwo">front end engineer</h3>
		</div>
	);
};

export default Title;
