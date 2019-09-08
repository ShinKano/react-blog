import React from 'react';
import styled from 'styled-components';
//
import Title from '../components/title/Title';
import AboutSection from '../components/about/AboutSection';
import FeaturesSection from '../components/features/FeaturesSection';


export default () => (
  <SampleSite>

    <Title />
    <AboutSection />
    <FeaturesSection />

  </SampleSite>
);

const SampleSite = styled.div`
  font-family: 'Muli', sans-serif;
  margin: -2rem;
`;
