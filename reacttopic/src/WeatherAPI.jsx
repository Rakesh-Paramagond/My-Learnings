import { useState } from "react";

const WeatherApp = function () {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState(null);

  const API_KEY = "YOUR_API_KEY";

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error("data nope");
      }
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h1>Weather Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get weather</button>
      </form>
      {weather && (
        <div>
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-lg">{weather.main.temp}°C</p>
          <p className="text-gray-700">{weather.weather[0].description}</p>
          <p className="text-lg">{weather.main.feels_like}°C</p>
        </div>
      )}
    </div>
  );
};
export { WeatherApp };
