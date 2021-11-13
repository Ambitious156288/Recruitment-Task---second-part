import axios from 'axios';

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
// const API_KEY = '91d6567150684b0672007cdd49cca895';

// const CORS_ERROR_HELPER = 'https://cors-anywhere.herokuapp.com/';
const CORS_ERROR_HELPER = 'https://thingproxy.freeboard.io/fetch/';

export const getWeatherData = async city => {
  const res = await axios.get(
    `${CORS_ERROR_HELPER}https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`,
  );

  return res;
};

export default getWeatherData;
