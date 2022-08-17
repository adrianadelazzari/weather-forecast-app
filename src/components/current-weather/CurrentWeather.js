import "./CurrentWeather.css";

function CurrentWeather() {
  return (
    <div className="current-weather">
      <div className="top">
        <div>
          <p className="city">Toronto</p>
          <p className="current-weather-description">Sunny</p>
        </div>
        <img
          alt="Current Weather"
          className="current-weather-icon"
          src="icons/01d.png"
        />
      </div>
      <div className="bottom">
        <p className="temperature">25°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">26°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
