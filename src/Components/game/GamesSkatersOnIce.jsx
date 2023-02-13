import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"

const GamesSkatersOnIce = ({ team }) => {
  const { onIce, players } = team
  const { name, id } = team.team

  let headings = [
    '#',
    ' ',
    '',
    'G',
    'A',
    'P',
    'TOI'
  ]
  
  const header = headings.map((heading, i) => {
    if (heading === '') {
     return  <Col key={i} md={5} className='text-center'>{heading}</Col>
    }  else {
      return <Col key={i} md={1}>{heading}</Col>
    }
  })

  const skaterOnIce = onIce.map(skater => {
    let key = `ID${skater}`
    let player

    for (const objKey in players)  {
      if (key === objKey) {
        player = players[key]
        const { jerseyNumber, position, stats, person } = player
        const { abbreviation } = position
        const { id, fullName } = person 
        if (abbreviation !== 'G') {
          const { skaterStats } = stats
          const { goals, assists, timeOnIce } = skaterStats
          
          return (
            <Row key={`${id}-${jerseyNumber}`} className='d-flex flex-row p-2' style={{fontSize: '14px'}}>
              <Col md={1} className='text-center'>{jerseyNumber}</Col>
              <Col md={5}>{fullName}</Col>
              <Col md={1} className='text-center'>{abbreviation}</Col>
              <Col md={1} className='text-center'>{goals}</Col>
              <Col md={1} className='text-center'>{assists}</Col>
              <Col md={1} className='text-center'>{goals + assists}</Col>
              <Col md={1} className='text-center'>{timeOnIce}</Col>
            </Row>
          )
        }
      }
    }
  })

  return (
    <Stack gap={2} className='bg-white shadow rounded striped'>
      <h4 style={{color: styleColor(id)}} className='text-center'>{name}</h4>
      <Container>
        <Row className='d-flex flex-row p-2 text-center'>
          {header}
        </Row>
        {skaterOnIce}
      </Container>
    </Stack>
  )
}

export default GamesSkatersOnIce