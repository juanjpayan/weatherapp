import React, { useEffect, useState } from 'react';
import './City.scss'

const City = ({city, setCity}) => {
	const [ icon, setIcon ] = useState('');

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5`)
			.then((res) => res.json())
			.then((data) => {
				setCity(data);
				setIcon(data.weather[0].icon);
			});
	}, [setCity]);

	return (
		<div className="cityInfo">
			{
				city?.name && 
				<>
				<div className="city">
					<div className="cityContainer">
				<h1 className="cityName">{city.name}</h1>
				<img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
					</div>
					<div className="description">
						<h3 style={{fontSize: "2rem", fontWeight: "100"}} >{city.weather[0].description_.upperFirst()}</h3>
					</div>
				</div>
				<h1 className="temperature">{Math.round(city.main.temp - 273.15) + '°'}</h1>
				<div className="temperatures">
				<h3 className="minTemp">{Math.round(city.main.temp_min - 273.15) + '°'}</h3>
				<h3 className="maxTemp">{Math.round(city.main.temp_max - 273.15) + '°'}</h3>
				</div>
				</>
			}			
			<hr style={{width:"80vw"}} />
		</div>
	);
};

export default City;
