import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudLightning, CloudSnow, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

const WeatherWidget: React.FC<{ location: string }> = ({ location }) => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 28,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'cloudy':
        return <Cloud className="text-gray-400" />;
      case 'rainy':
        return <CloudRain className="text-blue-400" />;
      case 'storm':
        return <CloudLightning className="text-purple-400" />;
      case 'snow':
        return <CloudSnow className="text-blue-200" />;
      case 'windy':
        return <Wind className="text-gray-500" />;
      default:
        return <Sun className="text-yellow-400" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{location}</h3>
          <p className="text-sm text-gray-500">Current Weather</p>
        </div>
        <div className="text-3xl">{getWeatherIcon(weather.condition)}</div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900">{weather.temperature}°C</div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Humidity: {weather.humidity}%</span>
          <span>Wind: {weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;