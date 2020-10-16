import React, { useState } from 'react';
import './App.css';
import City from './Components/City/City';
import Form from './Components/Form/Form';

function App() {
	const [ city, setCity ] = useState({});

	return (
		<div>
			<City city={city} setCity={setCity} />
			<Form city={city} setCity={setCity} />
		</div>
	);
}

export default App;
