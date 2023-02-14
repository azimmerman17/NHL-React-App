import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"

const GamesGoaliesOnIce = ({ team }) => {
  const { onIce, players } = team
  const { id } = team.team


  let headings = [
    '',
    'Goalie',
    'SV',
    'SA',
    'SV%',
    'TOI'
  ]
  
  const header = headings.map((heading, i) => {
    if (heading === 'Goalie') {
     return  <Col key={i} md={5} className='text-center' style={{fontSize: '12px'}}>{heading}</Col>
    }  else  if (heading === 'SV%') {
      return  <Col key={i} md={2} className='text-center' style={{fontSize: '12px'}}>{heading}</Col>
    } else {
      return <Col key={i} md={1} style={{fontSize: '12px'}}>{heading}</Col>
    }
  })

  const goalieOnIce = onIce.map(goalie => {
    let key = `ID${goalie}`
    let player

    for (const objKey in players)  {
      if (key === objKey) {
        player = players[key]
      }
    }
    const { jerseyNumber, position, stats, person } = player
    const { abbreviation } = position
    const { id, fullName } = person 
    if (abbreviation === 'G') {
      const { goalieStats } = stats
      const { shots, saves, savePercentage , timeOnIce} = goalieStats
          
      return (
        <Row key={`${id}-${jerseyNumber}`} className='d-flex flex-row p-1' style={{fontSize: '14px'}}>
          <Col md={1} className='text-center'>{jerseyNumber}</Col>
          <Col md={5}>{fullName}</Col>
          <Col md={1} className='text-center'>{saves}</Col>
          <Col md={1} className='text-center'>{shots}</Col>
          <Col md={2} className='text-center'>{savePercentage ? (savePercentage / 100).toFixed(3) : null}</Col>
          <Col md={1} className='text-center'>{timeOnIce}</Col>
        </Row>
      )
    } 
  })

  return (
    <Stack gap={2} className='shadow rounded text-white' style={{backgroundColor: styleColor(id)}}>
      <Container>
        <Row className='d-flex flex-row p-1 text-center'>
          {header}
        </Row>
        {goalieOnIce}
      </Container>
    </Stack>
  )
}

export default GamesGoaliesOnIce