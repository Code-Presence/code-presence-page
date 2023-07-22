import React from 'react'
import styled from 'styled-components'
import Logo from './assets/logo-defenitive-2.png'

function App() {

  return (
    <Container>
      <img src={Logo}/>
    </Container>
  )
}

export default App

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient( circle farthest-corner at 24.1% 68.8%,  rgba(50,50,50,1) 0%, rgba(0,0,0,1) 99.4% );

  & img {
    animation: pulse 2s infinite;
    max-width: 10vw;
  }

  @media screen and (max-width: 600px) {
    & img {
    animation: pulse 2s infinite;
    max-width: 30vw;
  }
  }
`;