import "./App.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from "./api";

function App() {
  const onSearchChangeHandler = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`
    );
  };

  return (
    <div className="container">
      <Search onSearchChange={onSearchChangeHandler} />
      <CurrentWeather />
    </div>
  );
}

export default App;
