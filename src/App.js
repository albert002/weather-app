import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "886705b4c1182eb1c69f28eb8c520e20";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      temperature:"",
      humidity:"",
      windSpeed:"",
      clouds:"",
      weather:{
        description:"",
        main:""
      },
      coords:{
        lon:"",
        lat:""
      }
    }
  }

    getWeather = async(e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      if(city && country){
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
        const data = await api_call.json();
        this.setState({
          temperature:data.main.temp,
          humidity:data.main.humidity,
          windSpeed:data.wind.speed,
          clouds:data.clouds.all,
          weather:{
            description:data.weather[0].description,
            main:data.weather[0].main
          },
          coords:{
            lon:data.coord.lon,
            lat:data.coord.lat
          }
        })
        console.log(this.state)
      }else{
        alert("Please enter valide data")
        throw new Error("Invalid inputs")
      }
      
    }

  render(){
    return(
      <div className="my-app">
        <div className="title">
          <img src={require('./img/images.png')}/>
        </div>
        <div className="result">
        <Form getWeather={this.getWeather}/>
        <Weather data={this.state}/>
        </div>
      </div>
      )
  }
}

export default App