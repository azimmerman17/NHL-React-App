import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"
import getTime from "../functions/getTime"

const GamesHeader = ({ linescore, abstractGameState, datetime }) => {
  const { teams , currentPeriod, currentPeriodOrdinal, currentPeriodTimeRemaining} = linescore
  const {  away, home } = teams

  const teamHeader = (team) => {
    const { name } = team.team
    return name
  }

  const teamId = (team) => {
    const { id } = team.team
    return id
  }

  const teamScore = (team) => {
    const { goals } = team
    return abstractGameState === 'Preview' ? null : goals
  }

  const gameTime = () => {
    switch (abstractGameState) {
      case 'Preview':
        console.log(datetime)
        const  { dateTime } = datetime
        return getTime(dateTime)
      case 'Live':
        return `${currentPeriodOrdinal} ${currentPeriodTimeRemaining}`
      case 'Final':
        return `Final ${ currentPeriod > 3 ? `- ${currentPeriodOrdinal}` : null}`
      default:
        return 'No Data'
    }
  }

  return (
    <Container className='bg-white p-2 shadow rounded m-a'>
    <Row>
      <Col md={4}>
        <h3 className='text-left' style={{color: styleColor(teamId(away))}}>{teamHeader(away)}</h3>
      </Col>
      <Col>
        <h3 className='text-left' style={{color: styleColor(teamId(away))}}>{teamScore(away)}</h3>
      </Col>
      <Col>
        <h6 className='text-center'>{gameTime()}</h6>
      </Col>
      <Col>
        <h3 className='text-right' style={{color: styleColor(teamId(home))}}>{teamScore(home)}</h3> 
      </Col>
      <Col  className='text-end' md={4}>
        <h3 className='text-right' style={{color: styleColor(teamId(home))}}>{teamHeader(home)}</h3> 
      </Col>
    </Row>
  </Container>
  )
}

export default GamesHeader