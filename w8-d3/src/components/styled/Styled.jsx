import React from 'react';
import styled from 'styled-components';

const Styled = () => {
  const HOne = styled.h1`
    text-decoration: underline;
    color: magenta;
    font-size: 36px;
    background: rgb(255,160,122);
    background: linear-gradient(90deg, rgba(255,160,122,1) 0%, rgba(201,65,45,1) 100%);
  `;

  return (
    <div>
      <HOne>Welcome to My Site</HOne>
    </div>
  )
}

export default Styled
