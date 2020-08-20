import React from 'react';
import Description from './Description';
import DescriptionImages from './DescriptionImages';

const MyDescriptionTitle = () => {
	return (
		<div className="description">
			<h1>front end focused </h1>
			<h1>with full stack experience</h1>
			<div className="description-wrapper">
				<Description />
				<DescriptionImages />
			</div>
		</div>
	);
};

export default MyDescriptionTitle;
