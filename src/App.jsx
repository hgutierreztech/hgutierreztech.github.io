import styled from "styled-components"
import Hero from "./Components/Hero"
import Who from "./Components/Who"
import Work from "./Components/Work"
import Contact from "./Components/Contact"

const Container = styled.div`
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


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Container>
  )
}

export default App
