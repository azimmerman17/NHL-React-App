import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import styleColor from "../functions/styleColor"

const GamesPlayCard = ({ playData }) => {
  const { about, players, result, team } = playData
  const { periodTime } = about
  const { description, event } = result
  const { name, triCode, id } = team

  const playerCol = players.map(playerInfo => {
    const { player, playerType } = playerInfo
    const { id, fullName } = player

    return (
      <div key={id} className='d-inline-flex flex-wrap m-1 p-1'>
        <div className='p-0'>
          <img className='rounded-circle border align-center shadow' src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${id}.jpg`} alt='' />
          <p style={{fontSize: '10px'}} className='text-center'>{fullName}</p>
        </div>
      </div>
    )

  })

  return (
    <Container className='p-2 shadow rounded bg-white'  >
      <Row className='d-flex align-items-center'>
        <Col md={1} className='d-inline'>
          <h6>{periodTime}</h6>
        </Col>
        <Col md={2} className='d-inline align-middle'>
          <h6 style={{fontSize: '14px', backgroundColor: styleColor(id)}} className='py-1 shadow rounded text-white text-center'>{event}</h6>
        </Col>
        <Col md={5} className='align-middle'>
        <h6 style={{color: styleColor(id)}}>{name}</h6>
        <p style={{fontSize: '14px'}}>{description}</p>
        </Col>
        <Col md={3} className='align-middle'>
          {playerCol}
        </Col>
      </Row>
    </Container>
  )
}

export default GamesPlayCard
