import React from 'react';
import Clock from './Components/Clock/Clock.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

const App = () => {

	return(
		<div className='App'>
			{/* <h1>Hello React!</h1> */}
			<Clock forEverYear={2020} />
			<Footer />
		</div>
	);
}

export default App;
