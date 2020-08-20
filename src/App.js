import React from 'react';
import Title from './components/Title';
import MyDescriptionTitle from './components/MyDescriptionTitle';
import ProjectHeading from './components/ProjectHeading';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<div className="app">
			<Title />
			<MyDescriptionTitle />
			<ProjectHeading />
			<ProjectCard />
			<Footer />
		</div>
	);
}

export default App;
