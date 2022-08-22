import "./App.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from "./api";
import { useState } from "react";
import WeatherForecast from "./components/weather-forecast/WeatherForecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const onSearchChangeHandler = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setWeatherForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={onSearchChangeHandler} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {weatherForecast && <WeatherForecast data={weatherForecast} />}
    </div>
  );
}

export default App;
