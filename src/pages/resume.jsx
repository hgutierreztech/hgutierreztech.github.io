import React from "react";
import { Document, Page, pdfjs} from "react-pdf";
import styled from "styled-components";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PageContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/BG.png");
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
        height: 200vh;
    }
`


const TitleContainer = styled.div`
  height: 10vh;
  width: 1300px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 10vh;
    flex-direction: column;
    }

`

const Title = styled.h1`
    font-size: 54px;

    @media only screen and (max-width: 768px){
        text-align: center;
    }
`


function Resume () {
    return (
        <PageContainer>
            <Section>
            <TitleContainer>
                <Title>
                    My Resume
                </Title>
            </TitleContainer>
            <div className="res">
                <Document 
                    file={"herbert_gutierrez.pdf"}
                    onLoadError={console.error}
                >
                    <Page pageIndex={0}/>
                </Document>
            </div>
            </Section>
        </PageContainer>
        
    )
}

export default Resume