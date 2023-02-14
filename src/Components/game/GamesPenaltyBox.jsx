import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"

const GamesPenaltyBox = ({ team }) => {
  const { penaltyBox, players } = team 
  const teamId = team.team.id

  if (penaltyBox.length === 0) {
    return null
  }

  const penalties = penaltyBox.map(penalty => {
    const { active, id, timeRemaining } = penalty
    let key = `ID${id}`
    let player

    for (const objKey in players)  {
      if (key === objKey) {
        player = players[key]
      }
    }
    const { jerseyNumber, position, person } = player
    const { abbreviation } = position
    const { fullName } = person 

    return (
      <Row key={id} >
        <Col md={1} className='text-center'>#{jerseyNumber}</Col>
        <Col md={5}>{fullName} ({abbreviation})</Col>
        <Col md={4}>Time Left: {timeRemaining}</Col>
      </Row>
    )

  })
  console.log(team)
  return (
    <Stack gap={1} className='p-1 text-center shadow rounded text-white' style={{backgroundColor: styleColor(teamId), fontSize: '14px'}}>
      <h6>Penalty Box</h6>
      {penalties}
    </Stack>
  )
}

export default GamesPenaltyBox