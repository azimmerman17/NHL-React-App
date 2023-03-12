import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"

import styleColor from "../functions/styleColor"
import getTime from "../functions/getTime"
import findDate from "../functions/findDate"

const GamesHeader = ({ linescore, abstractGameState, datetime, broadcasts }) => {
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
        const  { dateTime } = datetime
        return (
          <Stack gap={1}>
            <p>{findDate(dateTime, 0)}</p>
            <p>{getTime(dateTime)}</p>
          </Stack>
        )
      case 'Live':
        return `${currentPeriodOrdinal} ${currentPeriodTimeRemaining}`
      case 'Final':
        return `Final ${ currentPeriod > 3 ? `- ${currentPeriodOrdinal}` : ''}`
      default:
        return 'No Data'
    }
  }

  return (
  <Row className='bg-white p-2 shadow rounded'>
    <Col className='my-auto' md={4}>
      <h3 className='text-left' style={{color: styleColor(teamId(away))}}>{teamHeader(away)}</h3>
    </Col>
    <Col className='my-auto'>
      <h3 className='text-left' style={{color: styleColor(teamId(away))}}>{teamScore(away)}</h3>
    </Col>
    <Col className='my-auto' md={2}>
      <h6 className='text-center'>{gameTime()}</h6>
    </Col>
    <Col className='my-auto'>
      <h3 className='text-right' style={{color: styleColor(teamId(home))}}>{teamScore(home)}</h3> 
    </Col>
    <Col  className='my-auto' md={4}>
      <h3 className='text-right' style={{color: styleColor(teamId(home))}}>{teamHeader(home)}</h3> 
    </Col>
  </Row>
  )
}

export default GamesHeader