import React, {useEffect, useState} from "react";
import useClearParams from "use-clear-params";
import Child1 from './child1';
const API_KEY = "11cdc6aa0c99cab5a38623afd42ae261";




export default function Child2() {
  const [state, setState, getState] = React.useState({country:"", population: "", capital: "" , latlng:0, flag:""});
  const [weather, setWeather] = React.useState({temperature:0, weather_icons: "", windspeed: 0, precip:0});
  const [isopened, setIsopened]=React.useState(false);

  const query = useClearParams();

useEffect(() => {
      const getData = async () => {
        const api_call = await fetch(`https://restcountries.com/v2/name/`+query.get("country"));
        const data = await api_call.json();
        if(!data.hasOwnProperty('status')){
          setState({
          country: query.get("country"),
          population: data[0]["population"],
          capital: data[0]["capital"],
          latlng: data[0]["latlng"],
          flag: data[0]["flag"]
        });
      }else{
        setState({
          country: undefined,
          population: undefined,
          capital: undefined,
          latlng: undefined,
          flag: undefined
        });
      }
  };
    getData();
  }, []);

 
 async function getWeather(){
   
    const api_call = await fetch(`http://api.weatherstack.com/current?access_key=`+API_KEY+`&query=`+state["country"]);
        const data = await api_call.json();
        setIsopened(true);
        if(!data.hasOwnProperty('success')){
        setState({
          temperature: data["current"]["temperature"],
          weather_icons: data["current"]["weather_icons"],
          windspeed: data["current"]["windspeed"],
          precip: data["current"]["precip"]
        });
      }else{
        setIsopened(false);
        setState({
          temperature: undefined,
          weather_icons: undefined,
          windspeed: undefined,
          precip: undefined
        });
      }
  }

  return (
    <div className="App">
      <h1>COUNTRY: {state.country}</h1>
      <p>population: {state.population}</p>
      <p>capital: {state.capital}</p>
      <p>latlng: {state.latlng}</p>
      <p>flag:<img src={state.flag}/></p>
      <button onClick={(e) => { e.preventDefault(); getWeather()}}>weather</button>
      <p>
        {isopened && (<><p>temperature: {state.temperature}</p>
         <p> weather_icons:<img src={state.weather_icons}/></p>
         <p> windspeed: {state.windspeed}</p>
         <p> precip: {state.precip}</p></>)}
      </p>
    </div>
  );
}