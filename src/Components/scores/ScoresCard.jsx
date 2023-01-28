import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScoresTeams from './ScoresTeams';
import ScoresTime from './ScoresTime';
import ScoresGoals from './ScoresGoals';
import ScoresNav from './ScoresNav'

const ScoresCard = ({ game }) => {
  const { gamePk, teams, linescore, gameDate, broadcasts, status, scoringPlays, content } = game
  const { epg } = content.media
  const { abstractGameState } = status
  const { currentPeriod } = linescore

  return (
    <Container fluid style={{width: '100%', padding: '0'}} >
      <Row className='px-2'>
        {
          (abstractGameState === 'Preview' ) ? 
          <ScoresTeams teams={teams} abstractGameState={abstractGameState} /> :
          <ScoresTeams teams={linescore.teams} abstractGameState={abstractGameState} />
        }
        <ScoresTime gameDate={gameDate} broadcasts={broadcasts} abstractGameState={abstractGameState} linescore={linescore} />
       <div className='vl'></div> 
        <ScoresGoals teams={teams} scoringPlays={scoringPlays} currentPeriod={currentPeriod} abstractGameState={abstractGameState}/>
        <ScoresNav gamePk={gamePk} epg={epg} />
      </Row>
    </Container>
  )
}

export default ScoresCard