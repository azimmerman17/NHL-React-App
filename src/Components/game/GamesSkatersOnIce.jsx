import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"

const GamesSkatersOnIce = ({ team }) => {
  const { onIce, players } = team
  const { name, id } = team.team

  let headings = [
    'Skaters',
    'G',
    'A',
    '+/-',
    'S',
    'TOI'
  ]
  
  const header = headings.map((heading, i) => {
    if (heading === 'Skaters') {
     return  <Col key={i} md={6} className='text-white' style={{fontSize: '12px'}}>{heading}</Col>
    }  else {
      return <Col key={i} md={1} className='text-center text-white' style={{fontSize: '12px'}}>{heading}</Col>
    }
  })

  const skaterOnIce = onIce.map(skater => {
    let key = `ID${skater}`
    let player

    for (const objKey in players)  {
      if (key === objKey) {
        player = players[key]
      }
    }
    const { jerseyNumber, position, stats, person } = player
    const { abbreviation } = position
    const { id, fullName } = person 
    if (abbreviation !== 'G') {
      const { skaterStats } = stats
      const { goals, assists, timeOnIce, shots, plusMinus } = skaterStats

      return (
        <Row key={`${id}-${jerseyNumber}`} className='d-flex flex-row p-1 text-white' style={{fontSize: '14px'}}>
          <Col md={1} className='text-center'>{jerseyNumber}</Col>
          <Col md={5}>{fullName} ({abbreviation})</Col>
          <Col md={1} className='text-center'>{goals}</Col>
          <Col md={1} className='text-center'>{assists}</Col>
          <Col md={1} className='text-center'>{plusMinus}</Col>
          <Col md={1} className='text-center'>{shots}</Col>
          <Col md={1} className='text-center'>{timeOnIce}</Col>
        </Row>
      )
    }
  })

  return (
    <Stack gap={2} className='shadow rounded' style={{backgroundColor: styleColor(id)}}>
      <h4 className='text-white text-center mt-3'>{name}</h4>
      <Container>
        <Row className='d-flex flex-row p-1 text-center'>
          {header}
        </Row>
        {skaterOnIce}
      </Container>
    </Stack>
  )
}

export default GamesSkatersOnIce