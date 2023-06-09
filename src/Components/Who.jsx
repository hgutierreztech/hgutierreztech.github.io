import React from "react";
import styled from "styled-components";
import ProgressBar from './ProgressBar';
/*const skills = [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "APIs",
    "DataDog Metrics",
    "AWS",
    "SQLAlchemy"
]

const systems = [
    "Object-oriented Programming (OOP)",
    "Git",
    "Postman",
    "React.js",
    "Unit/Integration Testing",
    "Shortcut",
    "Zendesk",
    "Okta",
    "Auth0",
]*/


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px){
    height: 120vh;
}
`

const Container = styled.div`
  height: 100%;
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const DescContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    text-align: center;
    

    @media only screen and (max-width: 768px){
        align-items: center;
        text-align: center;
        height: 20vh;
    }
`


const ContentSection = styled.div`
  height: 70vh;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
    flex: 2;
    position: relative;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px){
        flex: 1;
        align-items: center;
        display: none;
    }
`

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px){
        font-size: 60px;
        text-align: center;
    }
`


const WhatIDo = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px){
        font-size: 30px;
        height: 5px;
    }
`

const Line = styled.img`
    height: 5px;
    
`

const Subtitle = styled.h2`
    color: rgb(219,142,86);
    
    @media only screen and (max-width: 768px){
        padding: 20px;
        text-align: center;
    }`

    

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;

    @media only screen and (max-width: 768px){
        font-size: 18px;
        text-align: center;
    }
`

const Right = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px){
        flex: 1;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    
`

const Img = styled.img`
    height: 300px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 15%;
    margin: auto;
    animation: animate 2s infinite ease alternate;
`;


const Who = () => {
    return (
        <Section id="who-section">
            <Container>
                 <Title>About</Title>
                <WhatIDo>
                        <Line src="./img/line.png"></Line>
                        <Subtitle>
                            Who I am
                        </Subtitle>
                </WhatIDo>

                <DescContainer>
                    <Desc>
                        I am a highly motivated software engineer with extensive experience in back-end software development and 
                        Quality Assurance testing. I have a keen eye for identifying potential issues and conducting rigorous 
                        testing to ensure that software products meet or exceed industry standards.
                    </Desc>
                </DescContainer>
                    <ContentSection>
                            <Left>
                            {/* 3D model*/}   
                                <Img src="./img/emoji.png"></Img>
                            </Left>
                            <Right>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="80" height={20} text1="Python"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="80" height={20} text1="C++"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="70" height={20} text1="Java"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="60" height={20} text1="JavaScript"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="80" height={20} text1="SQL"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="50" height={20} text1="React"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="80" height={20} text1="Photography"></ProgressBar>
                                <ProgressBar bgcolor="rgb(219,142,86)" progress="90" height={20} text1="Customer Service"></ProgressBar>
                            </Right>
                    </ContentSection>

            </Container>
        </Section>
    )
} 

export default Who