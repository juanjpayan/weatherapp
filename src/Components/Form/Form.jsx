import React, { useState } from 'react';
import './Form.scss';

const Form = ({ setCity }) => {
	const [ zipcode, setZipCode ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=709847967f5e54b97308c1b2cae4dee5`
		)
			.then((res) => res.json())
			.then((data) => setCity(data));
	};

	return (
		<div className="form">
			<form action="GET" onSubmit={handleSubmit}>
				<div className="container">
					<div className="zipcode">
						<label style={{ marginTop: '100px' }}>
							Zip Code:
							<input
								className="searchBox"
								type="text"
								placeholder="10036"
								onChange={(e) => setZipCode(e.target.value)}
							/>
						</label>
					</div>
					<button>Update</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
