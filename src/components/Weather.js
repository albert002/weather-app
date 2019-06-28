import React from 'react'

class Weather extends React.Component{
	render(){
		return(
			<div>
				<h2>Coords:</h2>
				<p>Lat: {this.props.data.coords.lat}</p>
				<p>Lat: {this.props.data.coords.lon}</p>
				<h2>Temperature: {this.props.data.temperature}'C</h2>
				<h2>Humidity: {this.props.data.humidity}</h2>
				<h2>Wind speed: {this.props.data.windSpeed}</h2>
				<h2>Clouds: {this.props.data.clouds}%</h2>
				<h2>About weather: {this.props.data.weather.main}:{this.props.data.weather.description}</h2>
			</div>
			)
	}
}

export default Weather