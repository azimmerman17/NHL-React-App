import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styleColor from '../functions/styleColor';

const ScoresTeams = ({ teams, abstractGameState }) => {
  const { home, away } = teams

  const points = (goals) => {
    return (
      <Col xs={2} md={2}>
        <h5 className='mb-0 mt-2'>
          {goals}
        </h5>
      </Col>
    )
  }

  const team = ((team) => {
    const { name, powerPlay, goaliePulled } = team.team
    const { goals } = team
    
      return (
        <Row>
          <Col>
          {/* style={{color: (powerPlay === true ? 'red' : 'black')}}> */}
            <h5 className='mb-0 mt-2' >
              {name} {powerPlay === true ? <small>pp</small> : null} {goaliePulled === true ?  <small>en</small> : null}
            </h5>
          </Col>
          {abstractGameState !== 'Preview' ? points(goals) : null}
        </Row>
      )
  })

  const record = ((team) => {
    const { wins, losses, ot } = team.leagueRecord
    const pts = (2 * wins) + ot

    return (
      <Row>
        <Col className='mb-2'>
          <small className='ps-2'>
            {wins}-{losses}{ot ? `-${ot} - ` : ' - '}<strong>{pts} pts</strong>
          </small>
        </Col>
      </Row>
    )
  })

  const shots = ((team) => {
    const { shotsOnGoal } = team

    return (
      <Row>
        <Col className='mb-2'>
          <small className='ps-2'>
            <strong>{shotsOnGoal}</strong> SOG
          </small>
        </Col>
      </Row>
    )
  })

  return (
       <Col xs={11} md={3}>
          <Row style={{height: '50%'}}>
            <Col>
              {team(away)}
              {abstractGameState === 'Preview' ? record(away) : shots(away)}
            </Col>
          </Row>
          <Row>
            <Col>
              {team(home)}
              {abstractGameState === 'Preview' ? record(home) : shots(home)}
            </Col>
          </Row>
        </Col> 
  )
}

export default ScoresTeams