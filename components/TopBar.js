import Link from 'next/link'
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Title from './Title';
import Paragraph from './Paragraph';


const TopBar = styled.div`
    background: slategray;
    width:100%;
    height: 70px;
    padding: 20px;
    color: white;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight:normal;
  font-family: 'Griffy', cursive;
  color:papayawhip;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled.img`
    height: 50px;
    animation: ${rotate360} 2s linear infinite;
`;
const HList = styled.ul`
  
  list-style-type: none;
  font-size:3rem;
  font-family:'Yanone Kaffeesatz';
//   background:aqua;
  width:15rem;
  display:flex;
  justify-content:space-between;
`;
const Anchor = styled.a`
  text-decoration:none;
  cursor:pointer;

  &:hover{
      text-decoration:underline;
  }
`;
export default ()=> {
    return(
        <TopBar>
            <Header>I am the top bar</Header>
            <HList>
                <li><Link href='/'><Anchor>Home</Anchor></Link></li>
                <li><Link href='/about'><Anchor>About</Anchor></Link></li>
            </HList>
            <RotatingLogo src="/static/logo.svg" alt="logo"/>
        </TopBar>
    )   
}