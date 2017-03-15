import React,{Component} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Card from './components/Card';
import Title from './components/Title';
import TopBar from './components/TopBar';

const App = styled.div`
    background: lightskyblue;
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
    <App>
        <Head>
            <title>Styled Components Example</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/globals.css"/>
        </Head>

        <TopBar></TopBar>
        <Title primary>I am the App header</Title>
        <Card action="greet" subject="people"/>
    </App>
  
 )
    }
    
  
}