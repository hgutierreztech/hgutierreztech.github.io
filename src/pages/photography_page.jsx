import React from "react";
import styled from "styled-components";
import Navbar2 from "../Components/NavbarPhotoPage";
import Contact from "../Components/Contact";

const PageContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #233d4d;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Section = styled.div`
    height: 100%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px){
        height: 160vh;
    }
`


const TitleContainer = styled.div`
  height: 20vh;
  width: 1300px;
  display: flex;
  justify-content: center;
  padding

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 10vh;
    flex-direction: column;
    }

`
const DescContainer = styled.div`
    height: 10vh;
    width: 1300px;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px){
        flex: .5;
        width: 90%;
    }

`

const PicContainer = styled.div`
  height: 80vh;
  width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 100vh;
    flex-direction: column;
    }

`
const PicSubContainer1 = styled.div`
  height: 50%;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
  align-items: center;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 50vh;
    flex-direction: column;
    }

`
const PicSubContainer2 = styled.div`
    height: 100%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


`

const Left = styled.div`
    flex: 1;
    position: relative;
    
    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
        heeight: 50%;
    }
    &:hover{
        flex: 1.5;
    }
    
`
const LeftMiddle = styled.div`
    flex: 1;
    position: relative;
    
    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
        display: none;
    }

    &:hover{
        flex: 1.5;
    }
`

const RightMiddel = styled.div`
    flex: 1;
    position: relative;
    padding: 20px;
    
    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
        display: none;
    }
    &:hover{
        flex: 1.5;
    }
`

const Right = styled.div`
    flex: 1;
    position: relative;
    
    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
        display: none;
    }
    &:hover{
        flex: 1.5;
    }
`

const RightMost = styled.div`
    flex: 1;
    position: relative;
    
    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
        display: none;
    }
    &:hover{
        flex: 1.5;
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
    margin: auto;

    @media only screen and (max-width: 768px){
        height: 200px;
    }

    &:hover{
        height: 500px;
    }
    
`

const Title = styled.h1`
    font-size: 74px;
    text-align: center;

    @media only screen and (max-width: 768px){
        text-align: center;
        font-size: 60px;
    }
`

const Line = styled.img`
    height: 5px;
`

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    text-align: center;
`


function PhotographyPage () {
    return (
        <PageContainer id="Photography">
            <Section >
                <Navbar2/>
                <TitleContainer>
                    
                </TitleContainer>
                <DescContainer>
                <Title>Photography</Title>
                    <WhatIDo>
                        <Line src="./img/line.png"></Line>
                        <Subtitle>
                            Type of Work
                        </Subtitle>
                    </WhatIDo>
                        <Desc> 
                            I am an avid photographer, capturing the beauty of the world through my lens.
                            This creative outlet allows me to bring a unique perspective and attention to detail to my work.
                            Whether it's exploring landscapes, documenting diverse cultures, or freezing candid moments of joy,
                            my photographs aim to evoke a sense of wonder and inspire a deeper connection with the world.
                        </Desc>
                </DescContainer>
                <PicContainer>
                    <PicSubContainer1>
                    <Left>
                        <Img src="./img/img5.jpeg"></Img>
                    </Left>
                    <LeftMiddle>
                        <Img src="./img/img2.jpg"></Img>
                    </LeftMiddle>
                    <RightMiddel>
                        <Img src="./img/img3.jpg"></Img>
                    </RightMiddel>
                    <Right>
                        <Img src="./img/img4.jpeg"></Img>
                    </Right>
                    <RightMost>
                        <Img src="./img/bachelorsgrad.jpeg"></Img>
                    </RightMost>
                    </PicSubContainer1>  
                </PicContainer>
        
           </Section>
            <PicSubContainer2>
                <PicContainer>
                <PicSubContainer1>
                        <Left>
                            <Img src="./img/boat.jpeg"></Img>
                        </Left>
                        <RightMost>
                        <Img src="./img/Img1.jpg"></Img>
                    </RightMost>
                </PicSubContainer1>
                </PicContainer>
            </PicSubContainer2>
           <Contact></Contact>
        </PageContainer>
        
    )
}

export default PhotographyPage