import React from 'react';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  font-weight:normal;
  font-family: 'Griffy', cursive;
  text-align: center;
  color: ${ ({primary})=> primary ? 'white':'palevioletred' };
  margin: 0 0 30px 0;
`;

export default Title;