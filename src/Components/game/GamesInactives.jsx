import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const GamesInactives = ({ team, homeAway }) => {
  const { roster } = team.roster
  const teamId = team.id
  console.log(team)
  const inactives = roster.map(player => {
    const { jerseyNumber, person, position } = player
    const { id, fullName, currentTeam, rosterStatus } = person
    const { abbreviation } = position

    if (rosterStatus === 'I' || rosterStatus === 'N') {
      return (
        <Row key={id} className='m-0'>
          <Col sm={2}>
            <p>#{jerseyNumber}</p>
          </Col>
          <Col>
            <h6 className='m-0'>{fullName}</h6>
          </Col>
          <Col>
            <p>{abbreviation}</p>
          </Col>
        </Row>
      )
    }
  })

  return (
    <div className='p-2 rounded'>
      {inactives}
    </div>
  )
}

export default GamesInactives