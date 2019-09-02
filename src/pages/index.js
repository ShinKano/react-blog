import React from 'react';
import styled from 'styled-components';
import {Jumbo, Title, JumboImg } from '../components/Jumbo';

export default () => (
  <Jumbo>
    <Title>ShinKano-Blog</Title>
    <JumboImg src="https://damp-thicket-88898.herokuapp.com/uploads/377395d49f2145c78a95b2191ed532de.svg" />
    <h2>Link</h2>
    <p><a href="https://twitter.com/Shincoding" target="_blank" rel="noopener noreferrer">Twitter: @Shincoding</a></p>
    <p><a href="https://github.com/ShinKano" target="_blank" rel="noopener noreferrer">GitHub: @ShinKano</a></p>
    <p><a href="https://qiita.com/ShinKano" target="_blank" rel="noopener noreferrer">Qiita: @ShinKano</a></p>
    <h4>with...</h4>
    <p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></p>
    <p><a href="https://github.com/react-static/react-static" target="_blank" rel="noopener noreferrer"> React-Static</a></p>
    <p><a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">Styled-Components</a></p>
  </Jumbo>
)
