import React from "react";
import styled from "styled-components";
import Navbar2 from "../Components/NavbarPhotoPage";


const PageContainer = styled.div`
  height: 100vh;
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
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px){
        height: 150vh;
        flex-direction: column;
    }
`
const MainContainer = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 120vh;
    flex-direction: column;
    align-items: center;
}
`

const TitleContainer = styled.div`
  height: 10vh;
  width: 1300px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 5vh;
    flex-direction: column;
    }

`

const Container = styled.div`
  height: 80vh;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const Left = styled.div`
    flex: 1;
    position: relative;
    
    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
    }
    
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px){
        flex: .5;
        width: 100%;
    }
`

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px){
        text-align: center;
        font-size: 50px;
        white-space: wrap;

    }
`

const MainImg = styled.img`
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
    
`

const Img = styled.img`
    height: 200px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 15%;

    @media only screen and (max-width: 768px){
        height: 200px;
    }`

const Line = styled.img`
    height: 5px;
    
`

const WhatItIs = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px){
        justify-content: center;
    }
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

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ListItem = styled.li`
    color: white;
    gap: 5px;
    -webkit-text-stroke: 1px black;
    position: relative;

    @media only screen and (max-width: 768px){
        font-size: 24px;
        color: white;
        -webkit-text-stroke: 0px;
    }
`;

function DestinationSpotter () {
    return (
        <PageContainer id="DestinationSpotter">
            <Navbar2/>
            <Section >
                <MainContainer>
                <TitleContainer></TitleContainer>
                <TitleContainer><Title>Destination Spotter</Title></TitleContainer>
                <Container>
                    <Left>
                        <MainImg src="./img/destination1.png"></MainImg>
                    </Left>
                    <Right>
                        
                        <WhatItIs>
                                <Line src="./img/line.png"></Line>
                                <Subtitle>
                                    What Is Destination Spotter?
                        </Subtitle>
                        </WhatItIs>
                        <Desc> 
                            Destination Spotter is a revolutionary web-based application designed 
                            to effortlessly connect users with a vast array of exciting local hotspots.
                            With this innovative platform, individuals can not only uncover hidden gems 
                            in their vicinity but also plan unforgettable trips by tapping into the knowledge 
                            and recommendations of local experts. 
                        </Desc>
                        
                    </Right>
                </Container>
                </MainContainer>
            </Section>
            <Section >
                <MainContainer>
                <TitleContainer></TitleContainer>
                <TitleContainer><Title>Details</Title></TitleContainer>
                <Container>
                    <Left>
                        <MainImg src="./img/destination3.png"></MainImg>
                    </Left>
                    <Right>
                        
                        <WhatItIs>
                                <Line src="./img/line.png"></Line>
                                <Subtitle>
                                    Tech Used
                        </Subtitle>
                        </WhatItIs>
                        <Desc> 
                            Destination Spotter is all about building a communitity so it was extremenly 
                            critical to ensure we empowered our users with the ability interact with each
                            of the spots and also add their own details that the original post might have 
                            missed.

                            You could also:
                        </Desc>
                        <List>
                            <ListItem>
                                <Desc>Save for later</Desc>
                            </ListItem>
                            <ListItem>
                                <Desc>Like or Dislike</Desc>
                            </ListItem>
                            <ListItem>
                                <Desc>Follow your favorite people</Desc>
                            </ListItem>
                            
                        </List>
                    </Right>
                </Container>
                </MainContainer>
            </Section>
        </PageContainer>
    )

}

export default DestinationSpotter