import React from 'react';
import Clock from './Components/Clock/Clock.js';
import Footer from './Components/Footer/Footer.js';
import FloatingEmojis from './Components/FloatingEmojis/FloatingEmojis.js';
import './App.css';

const App = () => {

	return(
		<div className='App'>
			<Clock forEverYear={2020} />
			<Footer />
			<FloatingEmojis emoji='⏳' />
		</div>
	);
}

export default App;
