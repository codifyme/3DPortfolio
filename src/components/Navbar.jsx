import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display:flex;
justify-content:center;

`;
const Container = styled.div`
width:1400px;
background-color:rebeccapurple;
display:flex;
justify-content:space-between;
align-items:center;
`;
const Links = styled.div`
display:flex;
align-items:center;
gap:50px;


`;
const Logo = styled.img`

`;
const List = styled.ul`
display:flex;
gap:20px;
`;
const ListItem = styled.li`

`;
const Icons = styled.div`

`;
const Icon = styled.img`

`;
const Button = styled.button`

`;


const Navbar = () => {
  return (
    <Section>
      <Container>
          <Links>
          <Logo src="./img/logoti.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          </Links>
          <Icons>
              <Icon src="./img/search.png" />
              <Button>Hire Now </Button>  
          </Icons>
        </Container>
    </Section>
  )
}

export default Navbar
