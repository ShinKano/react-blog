import React from 'react';
import styled from 'styled-components';
//
import FlexParent from '../atom/FlexParent';
import FlexChild from '../atom/FlexChild';
import Paragraph from '../atom/Paragraph';
import fourcol01 from '../../images/fourcola.jpg';


export default () => (

    <FlexParent>
        <FlexChild>
            <PaddingDiv>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
                    sed iaculis nisi egestas vitae. 
                </Paragraph>
            </PaddingDiv>
        </FlexChild>

        <FlexChild>
            <SquareDarkBrown />
            {/* <ImageA src={fourcol01} /> */}
        </FlexChild>

        <FlexChild>
            aaa
        </FlexChild>

        <FlexChild>
            <PaddingDiv>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
                    sed iaculis nisi egestas vitae. 
                </Paragraph>
            </PaddingDiv>
        </FlexChild>
    </FlexParent>
);

const PaddingDiv = styled.div`
    padding: 10%;
`;

const SquareDarkBrown = styled.div`
    width: 95%;
    height: 140px;
    background-color: #5C4D52;
`;

const ImageA = styled.img`
    width: 95%;
`;