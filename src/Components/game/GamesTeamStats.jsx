import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import styleColor from "../functions/styleColor"
import GamesStatsSwitch from "./GamesStatsSwitch"

const GamesTeamsStats = ({ teams }) => {
  const { home, away } = teams

  const displayedStats = [
    'SOG',
    'FO%',
    'PP',
    'BLKS',
    'HITS',
    'TKA',
    'PIM',
    'GVA'
  ]

  const statsHeader = displayedStats.map(display => {
    return <Col className='text-secondary' style={{fontSize: '14px'}} key={`${display}-header`}>{display}</Col>
  })

  const teamStats = (team) => {
    const { triCode, name } = team.team
    const { teamStats } = team
    const {  teamSkaterStats } = teamStats  

    const statSwitch = displayedStats.map(displayedStat => {
      return <GamesStatsSwitch key={`${displayedStat}-${name}`} stat={displayedStat} teamStats={teamSkaterStats}/>
    })
    
    return (
      <Row className='my-2'>
        <Col>
          <h4 style={{color: styleColor(name)}}>{triCode}</h4>
        </Col>
        {statSwitch}
      </Row>
    )
  }


  return (
    <Container className='bg-white text-center p-2 shadow rounded' >
      <Row className='text-secondary my-2'>
        <Col></Col>
        {statsHeader}
      </Row>
        {teamStats(away)}
        {teamStats(home)}
    </Container>
  )
}

export default GamesTeamsStats