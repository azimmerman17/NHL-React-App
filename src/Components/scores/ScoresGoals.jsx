import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScoresGoals = ({ teams, scoringPlays, currentPeriod, abstractGameState }) => {
  const { home, away } = teams
  const homeTeam = home.team.name
  let homeGoals = {
    '1st': [],
    '2nd': [],
    '3rd': [],
    'OT': [],
  }
  let awayGoals = {
    '1st': [],
    '2nd': [],
    '3rd': [],
    'OT': [],
  }

  let periods = ['1st', '2nd', '3rd', 'OT']

  scoringPlays.map((play) => {
    const { team, about } = play
    const { ordinalNum } = about
    const { name } = team
    try {
      if (homeTeam === name) {
        homeGoals[ordinalNum] = [...homeGoals[ordinalNum], play]
      } else {
        awayGoals[ordinalNum] = [...awayGoals[ordinalNum], play]
      }
    } catch (error) {
      console.log(error)
    }
  })

  const goalScorers = (team, period) => {
    if (team[period].length === 0) {
      return <small style={{color: 'black'}}>None</small>
    }
    const res = team[period].map((goal) => {
      const { about, players } = goal
      const { periodTime } = about
      let scorer 
      let goalTotal
      players.every(player => {
        const { playerType, seasonTotal } = player
        const { fullName } = player.player
        if (playerType === 'Scorer') {
          scorer = fullName
          goalTotal = seasonTotal
        }        
      })
      return <small  style={{color: 'black'}}>{scorer} {periodTime} ({goalTotal}) </small>
    })
    return res
  }
  
  const periodscores = (team) => {
    const res = periods.map((period, i) => {
      if (currentPeriod > i) {
        return (
          <div key={i} style={{display: 'inline', color: '#777'}} className='m-0 p-0'>
            <small>{period}: </small>
            {goalScorers(team, period)}
            <small> | </small>
          </div>
        )
      }
    })
    return res
  }
    
  const teamabbr = (team) => {
    const { abbreviation } = team.team
    return  <small className='me-3'><strong>{abbreviation}</strong></small>
  }

  return (
    <Col xs={0} md={6}>
      <Row style={{height: '50%'}}>
        <Col md={1}>
          {teamabbr(away)}
        </Col>
        <Col className='text-start' style={{display: 'inline'}}>
        {periodscores(awayGoals)}
        </Col>
      </Row>
      <Row>
        <Col md={1}>
          {teamabbr(home)} 
        </Col>
        <Col className='text-start' style={{display: 'inline'}}>
        {periodscores(homeGoals)}
        </Col>
      </Row>
    </Col>
  )
}

export default ScoresGoals
