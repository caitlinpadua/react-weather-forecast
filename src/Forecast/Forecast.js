import React from 'react';
import styled from 'styled-components';
import Moment from "react-moment";


const MainContent = styled.div `
    float: right;
    width: 100%;
    height: 100vh; 
    color: #000;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    h1 {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 4px;
    text-align: center;
    }
    h2 {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 17px;
      letter-spacing: 3px;
    }
`;

const Header = styled.div `
    width: 100wh;
    height: 150px;
    margin: 0;
    text-align: center;
    p{
        line-height: 1.6;
    }
`;


const ForecastWrapper = styled.div `
    width: 100wh;
    height: auto;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "day1 day2 day3 day4 day5";
    
    grid-gap: 30px;
`;

const ForecastCard = styled.div `
    margin-top: 50px;
    margin-left: 10%;
    margin-right: 10%;
    position: relative;
    box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
    border-radius: 5px;
    background-color: white;
    width: 200px;
    height: 300px;
    padding: 10px;
    grid-area: day1;
  

    &:nth-child(2) {
    position: relative;
    width: 200px;
    grid-area: day2;   
    }

    &:nth-child(3) {
    position: relative;
    width: 200px;
    grid-area: day3;
    }

    &:nth-child(4) {
    position: relative;
    width: 200px;
    grid-area: day4;
    }

    &:nth-child(5) {
    width: 200px;
    position: relative;
    grid-area: day5;
    }
`;

const Temperature = styled.div `
    position: absolute;
    text-align: center;
    align-items: center;
    width: 100%;
    left: 0;
`;

const Image = styled.div `
    width: 100%;
    height: 100px;
    position: absolute;
`;

const Description = styled.div `
    margin-top: 60%;
    p{
        font-size: 12px;
        white-space:pre-line;
        display:block;
     
    }
`;

const Forecast = props => {

        const date = new Date(); //gets the current date
        return (
          
            <MainContent>
                <Header>
                        <h1> WEATHER FORECAST</h1>
                            <p>
                            <Moment format = "MMMM D[, ] YYYY">{date}</Moment> <br/>
                            {props.city} 
                            </p>
                                          
                    </Header>
                    {props.zip1 && (
                <ForecastWrapper>
                     <ForecastCard>
                         {/* Today */}
                         <h2>Today</h2>
                         <Temperature>
                         <Image>
                                {props.icon1 && <img src= {`http://openweathermap.org/img/wn/${props.icon1}@2x.png`} alt="weather img1"/>}
                            </Image> 
                             <Description>  
                                        {props.temperatureToday}&deg;
                                        <p>
                                            Feels like: {props.feel1}<br/>
                                            {props.conditionToday}
                                        </p> 
                            </Description>      
                         </Temperature>
                     </ForecastCard> 

                     <ForecastCard>
                         {/* Day2 */}
                         <h2><Moment add={{ days: 1 }} format="ddd">{date}</Moment></h2>
                         <Temperature>
                             <Image>
                                {props.icon2 && <img src= {`http://openweathermap.org/img/wn/${props.icon2}@2x.png`} alt="weather img2"/>}
                             </Image>
                             <Description>
                             {props.temperatureTomorrow}&deg;
                            <p>
                                Feels like: {props.feel2}<br/>
                                {props.conditionTomorrow}
                            </p>
                             </Description>
                         </Temperature>
                     </ForecastCard>

                     <ForecastCard>
                         {/* Day3 */}
                         <h2><Moment add={{ days: 2 }} format="ddd">{date}</Moment></h2>
                         <Temperature>
                            <Image>
                            {props.icon3 && <img src= {`http://openweathermap.org/img/wn/${props.icon3}@2x.png`} alt="weather img3"/>}
                             </Image>
                            <Description>
                            {props.temperatureDay3}&deg;
                            <p>
                            Feels like: {props.feel3}<br/>
                            {props.conditionDay3}</p>
                            </Description>  
                         </Temperature>
                     </ForecastCard>

                     <ForecastCard>
                         {/* Day4 */}
                         <h2><Moment add={{ days: 3 }} format="ddd">{date}</Moment></h2>
                         <Temperature>
                            <Image>
                            {props.icon4 && <img src= {`http://openweathermap.org/img/wn/${props.icon4}@2x.png`} alt="weather img4"/>}
                           </Image>
                            <Description>
                            {props.temperatureDay4}&deg;
                            <p>
                            Feels like: {props.feel4}<br/>
                            {props.conditionDay4}
                            </p>
                            </Description>  
                         </Temperature>
                     </ForecastCard>

                     <ForecastCard>
                         {/* Day5 */}
                         <h2><Moment add={{ days: 4 }} format="ddd">{date}</Moment></h2>
                         <Temperature>
                            <Image>
                            {props.icon5 && <img src= {`http://openweathermap.org/img/wn/${props.icon5}@2x.png`} alt="weather img5"/>}
                            </Image>
                            <Description>
                            {props.temperatureDay5}&deg;
                            <p>
                                Feels like: {props.feel5}<br/>
                                {props.conditionDay5}
                                </p>
                            </Description>    
                         </Temperature>
                     </ForecastCard>
                </ForecastWrapper>
                )}
            </MainContent>
        );
    }
// };

export default Forecast;