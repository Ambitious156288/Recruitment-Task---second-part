import { useState, useEffect } from 'react';
import { getWeatherData } from 'api/request';

const useDetails = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [delay, setDelay] = useState();

  const getWeather = () => {
    getWeatherData(city).then(res => {
      const { list } = res.data;
      setWeatherInfo(list);
    });
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const interval = () => {
    clearInterval(delay);

    weatherInfo &&
      setDelay(
        setInterval(() => {
          getWeather();
        }, 2000),
      );

    return () => {
      clearInterval(delay);
    };
  };

  return { city, weatherInfo, setCity, interval };
};

export default useDetails;
