import React from "react";
import styled from "styled-components";

const data = [
    "Destination Spotter 📍",
    "Beer Me 🍺 - Coming Soon",
    "Photography 📷",
]


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
}
`;

const Left = styled.div`
    flex: 6;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px){
        padding: 20px;
        justify-content: center;
    }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 100px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;

    @media only screen and (max-width: 768px){
        font-size: 24px;
        color: white;
        -webkit-text-stroke: 0px;
    }

    ::after{
        content: "${(props) => props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: rgb(219,142,86);
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover{
        ::after{
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to{
                    width: 100%;
                }
            }
            
        }
    }
`;

const Work = () => {
    const handleClick = (section) => {

        console.log(section)
        if (section === "Photography") {
            window.location.href="Photography"
        }
        if (section === "Destination Spotter") {
            window.location.href="DestinationSpotter"
        }
        
    };

    return (
        <Section id= "work-section">
            <Container>
                <Left>
                    <List>
                        {data.map(item=> (
                            <ListItem onClick={ () => handleClick(item)} key={item} text={item}>{item}{
                                
                            }</ListItem>
                        ))}
                    </List>
                </Left>
            </Container>
        </Section>
    )
} 

export default Work