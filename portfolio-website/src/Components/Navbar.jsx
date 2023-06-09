import { React } from "react";
import styled from "styled-components";


const Section = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(48,48,48);

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgb(48,48,48)

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 45px;
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Icon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

`;

const Lists = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px){
        display: none
    }
`;


const ListItem = styled.li`
    cursor: pointer;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: rgb(219,142,86);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {

    const scrollDown = (section) => {
        const element = document.getElementById(section)
        console.log(section)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    };
    

    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/BeerMe.png"></Logo>
                    <Lists>
                        <ListItem onClick={ () => scrollDown("hero-section")}>Home</ListItem>
                        <ListItem onClick={ () => scrollDown("work-section")}>Work</ListItem>
                        <ListItem onClick={ () => scrollDown("contact-section")}>Contact</ListItem>
                    </Lists>
                </Links>
                <Icons>
                    <Icon src="./img/LinkedIn3.png" onClick={() => { window.location.href="https://www.linkedin.com/in/herbert-gutierrez-software-engineer/"; }}></Icon>
                    <Icon src="./img/instagram.png" onClick={() => { window.location.href="https://instagram.com/blue_lighting_m3?igshid=OGQ5ZDc2ODk2ZA=="; }}></Icon>
                    <Button onClick={() => scrollDown("contact-section")}>Contact Me!</Button>
                </Icons>
            </Container>
        </Section>
    )
} 

export default Navbar