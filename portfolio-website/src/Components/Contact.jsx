import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./map"
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: "#303030";
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
}
`;

const Title = styled.h1`
    font-weight: 200;
`

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6
    border: none;
    border-radius: 5px

`

const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px
    background-color: #e8e6e6
`

const Button = styled.button`
    background-color: rgb(219,142,86);
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    padding: 20px; 
    cursor: pointer;
`

const Right = styled.div`
  flex: 1;
`



const Contact = () => {
    const ref = useRef()
    const [success, setSuccess] = useState(null)

    const handleSubmit= e =>{
        e.preventDefault()

        emailjs.sendForm('service_vbc590o', 'template_4e1u6pu', ref.current, 'z53KtfXIcv57BaEa1')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
    };
    return (
        <Section id="contact-section">
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <TextArea placeholder="Write your message" name="message" rows={10} />
                        <Button type="submit">Send</Button>
                        {success && 
                            "Your Message has been sent, I will get back to you soon!"}
                    </Form>
                </Left>
                <Right>
                    <Map></Map>
                </Right>
            </Container>
        </Section>
    )
} 

export default Contact