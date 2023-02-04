import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const GamesFinal = ({ boxscore }) => {
  console.log(boxscore)
  return (
    <Stack gap={3} className='mt-3'>
    <Container>
      <Row>
        <Col md={10}>
          <h2>Recap</h2>
          <h2>Team Stats + Box Score</h2>
          <h2> PLays by period</h2>
        </Col>
        <Col md={2}>
          <h2>BoxScore</h2>
          <h2>Scoring</h2>
          <h2>Penalties</h2>
          <h2>Stars of the Game</h2>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesFinal