import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesBoxscore from "./GamesBoxscore"
import GamesScoring from "./GamesScoring"
import GamesPenalties from "./GamesPenalties"
import GamesStarsofGame from "./GamesStarsofGame"

const GamesFinal = ({ liveData }) => {
  // console.log('liveData', liveData)
  const { boxscore, linescore, plays, decisions } = liveData
  const { teams } = boxscore
  const { periods, hasShootout, currentPeriod } = linescore

  return (
    <Stack gap={3} className='mt-3'>
    <Container>
      <Row>
        <Col md={9}>
          <h2>Recap</h2>
          <h2>Team Stats + Box Score</h2>
          <h2> PLays by period</h2>
        </Col>
        <Col md={3}>
          <Stack gap={2}>
            <GamesBoxscore teams={teams} periods={periods} hasShootout={hasShootout} />
            <GamesScoring plays={plays} currentPeriod={currentPeriod}/>
            <GamesPenalties plays={plays} currentPeriod={currentPeriod} />
            <GamesStarsofGame decisions={decisions} teams={teams}/>
          </Stack>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesFinal