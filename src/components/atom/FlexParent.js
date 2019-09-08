import styled from 'styled-components';

const FlexParent = styled.div`
    display: flex;
    @media screen and (max-width: 800px) {
    flex-flow: column;
  }
`;

export default FlexParent;