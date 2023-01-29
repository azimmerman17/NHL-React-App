import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdSportsHockey } from 'react-icons/md'


const NavBar = () => {
  return (
    <Navbar fixed="top" className="text-white" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="/"><h1><MdSportsHockey /> NHL</h1></Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/scores/">Scores</Nav.Link>
            <Nav.Link className="text-white" href="/standings">Standings</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar