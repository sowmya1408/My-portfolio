import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="footer">
			<FontAwesomeIcon className="icon" icon={faGithub} />
			<FontAwesomeIcon className="icon" icon={faLinkedin} />
		</div>
	);
};

export default Footer;
