
import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Paragraph from './Paragraph';


const Card = styled.div`
    background: papayawhip;
    border-radius:inherit;
	padding: 75px;
    cursor:pointer;

    &:hover{
        background: LightSeaGreen;
    }
    &:active{
        background: yellow;
    }
`;

export default ({action,subject})=> {
    return(
        <Card>
            <Title>I am a Card</Title>
            <Paragraph>my goal is to {action} some {subject}</Paragraph>
        </Card>
    )   
}