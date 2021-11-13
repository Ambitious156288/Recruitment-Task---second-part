import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchingBar from 'components/SearchingBar';
import Display from 'components/Display';

import { getWeatherData } from 'api/request';

const StyledWrapper = styled.div`
  text-align: center;
`;

const Root = () => {
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

  return (
    <StyledWrapper>
      <SearchingBar location={city} setLocation={setCity} />
      <Display weatherInfo={weatherInfo} city={city} delay={interval} />
    </StyledWrapper>
  );
};

export default Root;
