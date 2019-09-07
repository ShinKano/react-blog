import React from 'react';
import styled from 'styled-components';
//


export default () => (
    <TitleTextBg>
        <TitleText>SOLARIS</TitleText>
    </TitleTextBg>
);

const baseColor = "#222";

const TitleTextBg = styled.div`
    background-color: #3E3C54;
    position: absolute;
    bottom: -16px;
    margin: 0px;
    width: -webkit-fill-available;
    color: ${baseColor};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const TitleText = styled.h1`
  text-align: center;
  font-size: 40px;
  letter-spacing: .5em;
  color: #fff;
`;



