import React from 'react'

class Form extends React.Component{
	render(){
		return(
			<div className="form">
				<form onSubmit={this.props.getWeather}>
					<input type="text" name='city' placeholder="City" />
					<input type="text" name='country' placeholder="Country" />
					<input type="submit" value="Get weather"/>
				</form>
			</div>
			)
	}
}

export default Form