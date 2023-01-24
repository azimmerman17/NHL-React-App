import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScoresTeams from './ScoresTeams';
import ScoresTime from './ScoresTime';

const ScoresCard = ({ game }) => {
  const { gamePk, linescore, gameDate, broadcasts, status } = game
  const { abstractGameState } = status
  let { teams } = game
    if (abstractGameState !== 'Preview' ) {
      teams = linescore.teams
    }

  return (
    <Container fluid style={{width: '95%', padding: '0'}}>
      <Row>
        <ScoresTeams teams={teams} abstractGameState={abstractGameState}/>
        <ScoresTime gameDate={gameDate} broadcasts={broadcasts} abstractGameState={abstractGameState} linescore={linescore} />

        {/* GOALS */}
        {/* <Col xs={6} md={6} >
          <Row style={{height: '50%'}}>
            <Col className='align-baseline'>
              {abbr(away)}
            </Col>
          </Row>
          <Row style={{height: '50%'}}>
            <Col>
            {abbr(home)}
            </Col>
          </Row>
        </Col> */}

        {/* BUTTONS */}
        {/* <Col xs={1} md={1}>
          <Row style={{height: '50%'}}>
            <Col className='m-0 p-0'>
              <Button variant='outline-secondary' style={{width: '100%', height: '100%'}}>Game</Button>
            </Col>
          </Row>
          <Row style={{height: '50%'}}>
            <Col className='m-0 p-0'>
              <Button variant='outline-secondary' style={{width: '100%', height: '100%'}}>Preview</Button>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </Container>
  )
}

export default ScoresCard