import React from 'react';
import styled from 'styled-components';

import SearchingBar from 'components/SearchingBar';
import Display from 'components/Display';

const StyledWrapper = styled.div`
  text-align: center;
`;

const Root = () => (
  <StyledWrapper>
    <SearchingBar />
    <Display />
  </StyledWrapper>
);

export default Root;
