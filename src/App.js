import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home';
import Scores from './Components/scores/Scores';
import Standings from './Components/standings/Standings';
import './App.css';

import { StandingsData } from './Models/StandingsData';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar className="text-white" bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand className="text-white" href="/"><h1>&#127954; NHL</h1></Navbar.Brand>
              <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="text-white" href="/scores">Scores</Nav.Link>
                  <Nav.Link className="text-white" href="/standings">Standings</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main className="p-3">
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
