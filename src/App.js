import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home';
import Scores from './Components/Scores';
import Standings from './Components/Standings';
import './App.css';

import { StandingsData } from './Models/StandingsData';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/"><h1>&#127954; NHL</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/scores">Scores</Nav.Link>
                  <Nav.Link href="/standings">Standings</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/standings' element={<Standings  StandingsData={StandingsData} />} />
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
