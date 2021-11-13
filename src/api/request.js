import axios from 'axios';

export const getWeatherData = async city => {
  const res = await axios.get(
    `${process.env.CORS_ERROR_HELPER}https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${process.env.API_KEY}`,
  );

  return res;
};

export default getWeatherData;
