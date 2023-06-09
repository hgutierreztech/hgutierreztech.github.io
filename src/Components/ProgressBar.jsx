import React from 'react'
import styled from "styled-components";


const Container = styled.div`
    height: 2vh;
    display: flex;
    text-align: center;
    width: 650px;
    

    @media only screen and (max-width: 768px){
        align-items: center;
        text-align: center;
        width: 300px;
    }
`

  
const ProgressBar = ({bgcolor,progress,height,text1, width}) => {
     
    const Parentdiv = {
        class: "bar flex",
        height: height,
        width: '90%',
        display: "flex",
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        margin: 5,
        textAlign: 'right',
        alignItems: "center",
    }
      
    const Childdiv = {
        class: "bar fill",
        display: "flex",
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 4,
    }

    const GrandChilddiv = {
        height: '100%',
        width: width,
        display: "flex",
        backgroundColor: "rgb(188,125,83)",
        borderRadius: 4,
        textAlign: 'left',
        alignItems: "center",
    }
      
    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 400,
        fontSize: 15,
    }

    const skilltext = {
        padding:10,
        color: 'black',
        fontWeight: 400,
        fontSize: 15,
    }
        
    return (
        <Container>
            <div style={Parentdiv}>
            <div style={Childdiv}>
                <div style={GrandChilddiv}>
                    <span style={skilltext}> {`${text1}`}</span>
                </div>
            </div>
                <span style={progresstext}> {`${progress}%`}</span>
            </div>
        </Container>
    )
}
  
export default ProgressBar;