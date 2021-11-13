import React from 'react';
import SearchingBar from 'components/Nav/SearchingBar';
import Display from 'components/Display';

import { StyledWrapper } from './Root.styles';
import useDetails from './useDetails.hook';

const Root = () => {
  const { city, weatherInfo, setCity, interval } = useDetails();

  return (
    <StyledWrapper>
      <SearchingBar location={city} setLocation={setCity} />
      <Display weatherInfo={weatherInfo} city={city} delay={interval} />
    </StyledWrapper>
  );
};

export default Root;
