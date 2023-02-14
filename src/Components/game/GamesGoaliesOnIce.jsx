import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const GamesGoaliesOnIce = ({ team }) => {
  const { onIce, players } = team

  let headings = [
    '#',
    ' ',
    '',
    'TOTAL',
    'SV%',
    'TOI'
  ]
  
  const header = headings.map((heading, i) => {
    if (heading === '') {
     return  <Col key={i} md={4} className='text-center'>{heading}</Col>
    }  else  if (heading === 'TOTAL' || heading === 'SV%') {
      return  <Col key={i} md={2} className='text-center'>{heading}</Col>
    } else {
      return <Col key={i} md={1}>{heading}</Col>
    }
  })

  const goalieOnIce = onIce.map(goalie => {
    let key = `ID${goalie}`
    let player

    for (const objKey in players)  {
      if (key === objKey) {
        player = players[key]
        const { jerseyNumber, position, stats, person } = player
        const { abbreviation } = position
        const { id, fullName } = person 
        if (abbreviation === 'G') {
          const { goalieStats } = stats
          const { shots, saves, savePercentage , timeOnIce} = goalieStats
          
          return (
            <Row key={`${id}-${jerseyNumber}`} className='d-flex flex-row p-2' style={{fontSize: '14px'}}>
              <Col md={1} className='text-center'>{jerseyNumber}</Col>
              <Col md={4}>{fullName}</Col>
              <Col md={1} className='text-center'>{abbreviation}</Col>
              <Col md={2} className='text-center'>{saves}-{shots}</Col>
              <Col md={2} className='text-center'>{savePercentage.toFixed(2)}%</Col>
              <Col md={1} className='text-center'>{timeOnIce}</Col>

            </Row>
          )
        } else if (!player) {
            return <h6 className='text-center'>GOALIE PULLED</h6>
        }
      }
    }
  })

  return (
    <Stack gap={2} className='bg-white shadow rounded striped'>
      <Container>
        <Row className='d-flex flex-row p-2 text-center'>
          {header}
        </Row>
        {goalieOnIce}
      </Container>
    </Stack>
  )
}

export default GamesGoaliesOnIce