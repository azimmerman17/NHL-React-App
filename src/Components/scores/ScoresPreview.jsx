import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import getTime from '../getTime';
import Button from 'react-bootstrap/Button';

const ScoresPreview = ({ game }) => {
  const { gamePk, teams, gameDate, broadcasts } = game
  const { away, home} = teams

  const team = ((team) => {
    const { name } = team.team
    return (
      <Row>
        <Col>
          <h5 className='mb-0 mt-2'>
            {name}
          </h5>
        </Col>
      </Row>
    )
  })

  const record = ((team) => {
    const { wins, losses, ot } = team.leagueRecord
    const pts = (2 * wins) + ot
    return (
      <Row>
        <Col className='mb-2'>
          <small>
            {wins}-{losses}-{ot}<strong> {pts} pts</strong>
          </small>
        </Col>
      </Row>
    )
  })

  const media = () => {
    let tv = ['ESPN+'] 
    broadcasts.forEach((broadcast) => {
      const { name, type, site } = broadcast
        if (type === 'national'  && site !== 'nhlCA') {
          tv =  [...tv, ` ${name}`]
        }
        if (name === 'TNT' || name === 'NHLN') {
          tv.shift()
        }
    })
    return <small className='m-0'>{tv.toString()}</small>
  }

  const abbr = ((team) => {
    const { abbreviation } = team.team
    return <h6 className='align-baseline'>{abbreviation}</h6>
  })
  
  return (
    <Container fluid style={{width: '95%', padding: '0'}}>
      <Row>
        <Col xs={4} md={4}>
          <Row style={{height: '50%'}}>
            <Col>
              {team(away)}
              {record(away)}
            </Col>
          </Row>
          <Row>
            <Col>
              {team(home)}
              {record(home)}
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}>
          <Row>
            <Col>{getTime(gameDate)}</Col>
          </Row>
          <Row>
            <Col className='mt-1'>{media()}</Col>
          </Row>
        </Col>
        <Col xs={6} md={6} >
          <Row style={{height: '50%'}}>
            <Col className='align-baseline'>
              {abbr(away)}
            </Col>
          </Row>
          <Row style={{height: '50%'}}>
            <Col>
            {abbr(home)}
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}>
          <Row style={{height: '50%'}}>
            <Col className='m-0 p-0'>
              <Button variant='outline-secondary' style={{width: '100%', height: '100%'}}>Game</Button>
            </Col>
          </Row>
          <Row style={{height: '50%'}}>
            <Col className='m-0 p-0'>
              <Button variant='outline-secondary' style={{width: '100%', height: '100%'}}>Preview</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ScoresPreview