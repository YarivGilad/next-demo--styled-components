import React from 'react';

import styled from 'styled-components';

const Paragraph = styled.h1`
  font-size: 3.8rem;
  font-weight:400;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  text-align: center;
  color: ${ ({primary})=> primary ? 'white':'palevioletred' };
  margin: 0 0 30px 0;
`;

export default Paragraph;