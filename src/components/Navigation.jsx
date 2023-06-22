import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navigation = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">PokeDex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/collection'>Collection</NavLink>                                  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation