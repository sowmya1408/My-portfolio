import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="footer">
			<a href="https://github.com/sowmya1408" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
			<a href="https://www.linkedin.com/in/sowmyamannem/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
		</div>
	);
};

export default Footer;
