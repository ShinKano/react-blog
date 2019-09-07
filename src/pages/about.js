import React from 'react';
import styled from 'styled-components';
//
import Title from '../components/title/Title';


export default () => (
  <SampleSite>

    <Title />
      

    <AboutSection>
      <FlexContainer>
        <FlexColTow>aaa</FlexColTow>
        <FlexColOne>bbb</FlexColOne>
        
      </FlexContainer>
    </AboutSection>

  </SampleSite>
);


const baseColor = "#222";

const SampleSite = styled.div`
  font-family: 'Muli', sans-serif;
  margin: -2rem;
`;





const AboutSection = styled.div`
  position: relative;
  width: -webkit-fill-available;
  background-color: #fff;
  margin-top: 16px;
  color: ${baseColor};
`;

const FlexContainer = styled.div`
  padding: 60px;
  display: flex;
`;

const FlexColTow = styled.div`
  flex: 2;
`;

const FlexColOne = styled.div`
  flex: 1;
`;

