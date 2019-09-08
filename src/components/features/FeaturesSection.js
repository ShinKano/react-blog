import React from 'react';
import styled from 'styled-components';
//
import FlexParent from '../atom/FlexParent';
import FlexChildOne from '../atom/FlexChild';


export default () => (
    <>
    <FlexParent>
        <FlexChildOne>
            aaa
        </FlexChildOne>
        <FlexChildOne>
            aaa
        </FlexChildOne>
    </FlexParent>
    </>
);
