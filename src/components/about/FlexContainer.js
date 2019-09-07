import React from 'react';
import styled from 'styled-components';
//
import PhotoWidthBox from './PhotoWidthBox'

export default () => (
  <>
    <FlexContainer>
      <FlexColTow>
        <PhotoWidthBox />
      </FlexColTow>
      <FlexColOne>bbbkbkbkjbkbkbkbk</FlexColOne>
    </FlexContainer>
  </>
);

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