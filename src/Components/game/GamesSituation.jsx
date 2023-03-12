import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const GamesSituation = ({ powerPlayInfo, powerPlayStrength }) => {
  if (powerPlayStrength !== 'Even') {
    const { situationTimeRemaining } = powerPlayInfo

    const  timeLeft = () => {
      return `${Math.roundDown(situationTimeRemaining / 60)}:${situationTimeRemaining % 60}`
    }

    return (
      <Container>
        <Row className='text-white text-center p-3 shadow rounded' style={{backgroundColor: 'red'}}>
          <Col></Col>
          <Col>
            <h6 style={{fontSize: '16px'}}>{powerPlayStrength}</h6>
          </Col>
          <Col>
            <h6 style={{fontSize: '16px'}}>Time Left: {timeLeft()}</h6>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      
    )
  }
}

export default GamesSituation