import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import styleColor from "../functions/styleColor"


const GamesPlayersMaxStat = ({ maxStat, player, team }) => {
  const { jerseyNumber, person, position } = player
  const { id, fullName, currentTeam } = person
  const { abbreviation } = position
  const teamId = currentTeam.id
  
  return (
    <Container>
      <Row className={team === 'home' ? 'd-flex flex-row-reverse' : ''}>
        <Col className={team === 'home' ? 'my-auto text-end' : 'my-auto'} sm={3}>
          <img className='rounded-circle' style={{border: `1px solid ${styleColor(teamId)}`}} src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${id}.jpg`} alt=''></img>
        </Col>
        <Col className={team === 'home' ? 'my-auto text-end' : 'my-auto'}>
          <h6>{fullName}</h6>
          <p><small>#{jerseyNumber} {abbreviation}</small></p>
        </Col>
        <Col className='my-auto text-center p-0' sm={2}>
          <h5>{maxStat}</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default GamesPlayersMaxStat