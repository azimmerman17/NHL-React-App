import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScoresTeams from './ScoresTeams';
import ScoresTime from './ScoresTime';
import ScoresGoals from './ScoresGoals';
import ScoresNav from './ScoresNav'

const ScoresCard = ({ game }) => {
  const { gamePk, teams, linescore, gameDate, broadcasts, status, scoringPlays } = game
  const { abstractGameState } = status
  const { currentPeriod } = linescore

  return (
    <Container fluid style={{width: '95%', padding: '0'}}>
      <Row className='px-2'>
        {
          (abstractGameState === 'Preview' ) ? 
          <ScoresTeams teams={teams} abstractGameState={abstractGameState} /> :
          <ScoresTeams teams={linescore.teams} abstractGameState={abstractGameState} />
        }
        <ScoresTime gameDate={gameDate} broadcasts={broadcasts} abstractGameState={abstractGameState} linescore={linescore} />
       <div className='vl'></div> 
        <ScoresGoals teams={teams} scoringPlays={scoringPlays} currentPeriod={currentPeriod} abstractGameState={abstractGameState}/>
        {/* <ScoresNav /> */}
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