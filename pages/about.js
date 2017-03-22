import React,{Component} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Card from '../components/Card';
import Title from '../components/Title';
import TopBar from '../components/TopBar';

const About = styled.div`
    background: MediumOrchid;
    padding:100px;   
    border-radius:8px;
    display:flex;
    flex-direction:column;
`

export default class extends Component{
  
    constructor(props){
        super(props)
    }

    render(){
        return(
            <About>
                <Head>
                    <title>Styled Components Example</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/globals.css"/>
                </Head>

                <TopBar>Top bar on the about page...</TopBar>
                <Title primary>I am the About page</Title>
                <Card action="find" subject="survivors"/>
            </About>
            )
    }
    
  
}