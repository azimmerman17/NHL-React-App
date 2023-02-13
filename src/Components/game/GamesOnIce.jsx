import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GamesSkatersOnIce from "./GamesSkatersOnIce"

const GamesOnIce = ({ boxscore , linescore }) => {
  const { teams } = boxscore
  const { powerPlayInfo, powerPlayStrength } = linescore
  const { inSituation, situationTimeElapsed, situationTimeRemaining } = powerPlayInfo
  const { away, home } = teams

  return (
    <Stack gap={2} className='bg-white p-2 shadow rounded'>
      {powerPlayStrength == 'Even' ? <h6 className='bg-danger text-center text-white p-2 shadow rounded'>{powerPlayStrength}</h6> : null}
      <Container>
        <Row>
          <Col>
            <GamesSkatersOnIce team={away} />
          </Col>
          <Col>
            <GamesSkatersOnIce team={home} />
          </Col>
        </Row>
      </Container>
    <p>Players on Ice</p>
    <p>goalie stats #, name, saves, shots, sv%</p>
    <p>Penalty Box</p>
    </Stack>
  )
}

export default GamesOnIce