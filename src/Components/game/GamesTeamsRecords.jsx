import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"

import styleColor from "../functions/styleColor"


const GamesTeamsRecords = ({ teams }) => {
  const { home, away } = teams

  const teamInfo = (teamData) => {
      const { leagueRecord, team } = teamData
      const { id, name } = team
      const { wins, losses, ot } = leagueRecord
      const pts = (2 * wins) + ot
      return (
        <Stack gap={1}>
          <h5 style={{color: styleColor(id)}}>{name}</h5>
          <p style={{fontSize: '14px'}}>
            {wins}-{losses}{ot ? `-${ot} - ` : ' - '}<strong>{pts} pts</strong>
          </p>
        </Stack>
      )
  }

  return (
    <Container className='bg-white p-2 shadow rounded m-a'>
      <Row>
        <Col md={6}>
          {teamInfo(away)}
        </Col>
        <Col md={6} className='text-end'>
        {teamInfo(home)}
        </Col>
      </Row>
    </Container>
  )
}

export default GamesTeamsRecords