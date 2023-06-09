import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px){
    height: 200vh;
}
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px){
        flex: 1;
        align-items: center;
    }

`
const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px){
        text-align: center;
        
    }
`

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
`

const Line = styled.img`
    height: 5px;
`

const Subtitle = styled.h2`
    color: rgb(219,142,86);
    @media only screen and (max-width: 768px){
        padding: 20px;
        text-align: center;
    }
`

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;

    @media only screen and (max-width: 768px){
        padding: 20px;
        text-align: center;
    }
`

const Button = styled.button`
    width: 150px;
    padding: 10px;
    background-color: rgb(219,142,86);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`


const Right = styled.div`
    flex: 2.5;
    position: relative;
    
    @media only screen and (max-width: 768px){
        flex: 1;
        width: 100%;
    }
`

const Img = styled.img`
    height: 650px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px){
        width: 400px;
        height: 400px;
    }

    
`

const Hero = () => {
    const scrollDown = () => {
        const element = document.getElementById("who-section")
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    };
    //const handleClick = () => {
     //   console.log("clicked")
       // window.location.href="/resume"
        
    //};

    return (
        <Section id="hero-section">
            <Navbar/>
            <Container>
                <Left>
                    <Title>Herbert Gutierrez</Title>
                    <WhatIDo>
                        <Line src=".public/img/line.png"></Line>
                        <Subtitle>
                            What I do
                        </Subtitle>
                    </WhatIDo>
                    <Desc> 
                        I develop software solutions to address your everyday technical challenges, 
                        enabling you and your business to reach your professional objectives.
                    </Desc>
                    <Button onClick={scrollDown}>Learn More About Me</Button>
                </Left>
                <Right>
                    {/* 3D model*/}
                    <Img src= "./img/profile_photo2.jpeg"></Img>
                </Right>
            </Container>
        </Section>
    )
} 

export default Hero