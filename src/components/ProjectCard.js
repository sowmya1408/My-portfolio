import React from 'react';
import { cardData } from '../data/data';

const ProjectCard = () => {
	return (
		<div className="project-div">
			{cardData.map((projectData) => {
				return (
					<div class="container">
						<div class="content">
							<div class="image-overlay"></div>
							<ul className="project-list">
								<li className="project-image">
									<img src={projectData.img} alt="projects" />
								</li>
								<li className="project-name">{projectData.name}</li>
								<li>{projectData.technologies[0]}</li>
								<li>{projectData.technologies[1]}</li>
								<li>{projectData.technologies[2]}</li>
								<li>{projectData.technologies[3]}</li>
							</ul>
							<div class="content-details fadeIn-left">
								<button className="overlay-buttons">
									<a href={projectData.Sourcecode} target="_blank">
										SOURCE CODE
									</a>
								</button>
								<button className="overlay-buttons">
									<a href={projectData.Deployed} target="_blank">
										DEPLOYMENT
									</a>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectCard;
