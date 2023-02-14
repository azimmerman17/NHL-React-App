import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesSkatersOnIce from "./GamesSkatersOnIce"
import GamesGoaliesOnIce from "./GamesGoaliesOnIce"
import GamesPenaltyBox from "./GamesPenaltyBox"

const GamesOnIce = ({ boxscore , linescore }) => {
  const { teams } = boxscore
  const { powerPlayInfo, powerPlayStrength } = linescore
  const { inSituation, situationTimeElapsed, situationTimeRemaining } = powerPlayInfo
  const { away, home } = teams

  return (
    <Stack gap={2} className='bg-white p-2 shadow rounded'>
      {powerPlayStrength !== 'Even' ? <h6 className='bg-danger text-center text-white p-2 shadow rounded'>{powerPlayStrength}</h6> : null}
      <Row>
        <Col>
          <GamesSkatersOnIce team={away} />
        </Col>
        <Col>
          <GamesSkatersOnIce team={home} />
        </Col>
      </Row>
      <Row>
        <Col>
          <GamesGoaliesOnIce team={away} />
        </Col>
        <Col>
          <GamesGoaliesOnIce team={home} />
        </Col>
      </Row>
      <Row>
        <Col>
          <GamesPenaltyBox team={away} />
        </Col>
        <Col>
          <GamesPenaltyBox team={home} />
        </Col>
      </Row>
    <p>Penalty Box</p>
    </Stack>
  )
}

export default GamesOnIce