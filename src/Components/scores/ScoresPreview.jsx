import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScoresPreview = ({ game }) => {
  const { gamePk, teams, status } = game
  const { away, home} = teams
  const { abstractGameState } = status
  return (
    <div key={gamePk}>
      <h6>{`${away.team.name} at ${home.team.name}`}</h6>
      <p>{abstractGameState}</p>
      <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  </div>
  )
}

export default ScoresPreview