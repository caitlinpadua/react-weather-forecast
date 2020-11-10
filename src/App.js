import React from 'react';
import './App.css';
import ZipCode from './Zipcode/Zipcode';
import Forecast from './Forecast/Forecast';


class App extends React.Component { 
  

  state = {
    zip1: undefined,
    city: undefined,
    day: undefined,
    date: undefined,

    //current 
    temperatureNow: undefined,
    conditionToday: undefined,
    icon1: undefined,

    //tomorrow
    temperatureTomorrow: undefined,
    conditionTomorrow: undefined,
    icon2: undefined,

 

    //day 3
    temperatureDay3: undefined,
    conditionDay3: undefined,
    icon3: undefined,
   

    //day4
    temperatureDay4: undefined,
    conditionDay4: undefined,
    icon4: undefined,
  

    //day5
    temperatureDay5: undefined,
    conditionDay5: undefined,
    icon5: undefined,

    //error
    error: undefined
  };


  getTemperature = async e => {
      
      e.preventDefault();
    
      const zip1 = e.target.elements.zip1.value;
      const API_KEY = 'e800bad903b67d2a69320bf2e023f9c3'

      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip1}&appid=${API_KEY}&units=imperial`
        );

      //convert the api response to json
      const response = await api_call.json();
    
        console.log(response);  

          this.setState({
          date: response.list[0].dt_txt,
          zip1: zip1,
          city: response.city.name,

          //current
          temperatureToday: response.list[0].main.temp,
          conditionToday:   response.list[0].weather[0].description,
          icon1:            response.list[0].weather[0].icon,
          feel1:            response.list[0].main.feels_like,
          

          //tomorrow
          temperatureTomorrow: response.list[8].main.temp,
          conditionTomorrow:   response.list[8].weather[0].description,
          icon2:               response.list[8].weather[0].icon,
          feel2:               response.list[8].main.feels_like,
       

          //day 3
          temperatureDay3: response.list[16].main.temp,
          conditionDay3:   response.list[16].weather[0].description,
          icon3:    response.list[16].weather[0].icon,
          feel3:           response.list[16].main.feels_like,
          
     

          //day4
        temperatureDay4: response.list[24].main.temp,
        conditionDay4:   response.list[24].weather[0].description,
        icon4:           response.list[24].weather[0].icon,
        feel4:               response.list[24].main.feels_like,
       

        //day5
        temperatureDay5: response.list[32].main.temp,
        conditionDay5:   response.list[32].weather[0].description,
        icon5:           response.list[32].weather[0].icon,
        feel5:               response.list[32].main.feels_like,
       
        error: " ",
       })  
  }

 render() {
   return (
    <div className="AppWrapper">
      <ZipCode getTemperature={this.getTemperature}/>


      <Forecast
        zip1 = {this.state.zip1}
        date = {this.state.date}
        city = {this.state.city}

        //current
        temperatureToday = {this.state.temperatureToday}
        conditionToday = {this.state.conditionToday}
        icon1          = {this.state.icon1}
        feel1     = {this.state.feel1}
       
        //tomorrow
        temperatureTomorrow = {this.state.temperatureTomorrow}
        conditionTomorrow   = {this.state.conditionTomorrow}
        icon2          = {this.state.icon2}
        feel2     = {this.state.feel2}
       
        //day3
        temperatureDay3 = {this.state.temperatureDay3}
        conditionDay3   = {this.state.conditionDay3}
        icon3          = {this.state.icon3}
        feel3     = {this.state.feel3}
       
        //day4
        temperatureDay4 = {this.state.temperatureDay4}
        conditionDay4   = {this.state.conditionDay4}
        icon4          = {this.state.icon4}
        feel4     = {this.state.feel4}
      
        //day5
        temperatureDay5 = {this.state.temperatureDay5}
        conditionDay5   = {this.state.conditionDay5}
        icon5          = {this.state.icon5}
        feel5     = {this.state.feel5}

        //day6
        temperatureDay6 = {this.state.temperatureDay6}
        conditionDay6   = {this.state.conditionDay6}
        icon6          = {this.state.icon6}
        feel6     = {this.state.feel6}

        //day7
        temperatureDay7 = {this.state.temperatureDay7}
        conditionDay7   = {this.state.conditionDay7}
        icon7          = {this.state.icon7}
        feel7     = {this.state.feel7}
      
        //error
        error = {this.state.error}
          />
    </div>
  
   );
 }
} 




export default App;
