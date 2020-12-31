import React, { useState, useEffect } from 'react';
import Clock from './Components/Clock/Clock.js';
import Footer from './Components/Footer/Footer.js';
import FloatingEmojis from './Components/FloatingEmojis/FloatingEmojis.js';
import NewLevel from './Components/NewLevel/NewLevel.js';
import './App.css';

const App = () => {
	const [version, setVersion] = useState(1);
	const forEverYear = 2020;

	useEffect(() => {
	
		const interval = setInterval(() => {
			const difference = new Date().getFullYear() - forEverYear;
			if (difference) {
				document.querySelector('.NewLevel .card').classList.add('visible-card');
				setVersion(difference + 1);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	}, []);

	return(
		<div className='App'>
			<FloatingEmojis emoji={new Date().getFullYear() !== forEverYear ? '🎉' : '⏳'} />
         <NewLevel version={version} />
			<Clock forEverYear={forEverYear} />
			<Footer />
		</div>
	);
}

export default App;
