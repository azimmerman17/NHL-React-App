import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GamesHeader from "./GamesHeader"

const GamesPreview = ({ data }) => {
  const { gameData, liveData } = data
  const { linescore } = liveData
  const { datetime } = gameData

  console.log(gameData)

  console.log(data)
  return (
    <Stack gap={3} className='mt-3'>
      <GamesHeader linescore={linescore} abstractGameState={'Preview'} datetime={datetime} />
    <Container>
      <Row>
        <Col md={3}>
          <h2>TEAMS</h2>
        </Col>
        <Col md={6}>
          <h2>GAME</h2>
        </Col>
        <Col md={3}>
          <h2>PLAYERS</h2>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesPreview