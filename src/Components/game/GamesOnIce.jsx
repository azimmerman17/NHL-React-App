import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesSkatersOnIce from "./GamesSkatersOnIce"
import GamesGoaliesOnIce from "./GamesGoaliesOnIce"
import GamesPenaltyBox from "./GamesPenaltyBox"
import GamesSituation from "./GamesSituation"

const GamesOnIce = ({ boxscore , linescore }) => {
  const { teams } = boxscore
  const { powerPlayInfo, powerPlayStrength } = linescore
  const { away, home } = teams

  return (
    <Stack gap={2} className='bg-white p-1 shadow rounded'>
      <GamesSituation powerPlayInfo={powerPlayInfo} powerPlayStrength={powerPlayStrength} />
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
    </Stack>
  )
}

export default GamesOnIce