import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const GamesPrevGameRecord = ({ game, teamId }) => {
  const { linescore, gamePk, teams } = game
  const { currentPeriodOrdinal, currentPeriod } = linescore
  const { home, away } = teams

  const getTeamId = (team) => {
    const { id } = team.team
    return id
  }

  const getTeamAbbr = (team) => {
    const { abbreviation } = team.team
    return abbreviation
  }

  const homeId = getTeamId(home)

const result = () => {
  if (home.score > away.score && homeId === teamId) {
    return <h6 className="text-success">W {currentPeriod > 3 ? `(${currentPeriodOrdinal})` : ''}</h6>
  } else if ((home.score > away.score && homeId !== teamId)) {
    return <h6 className="text-danger">L {currentPeriod > 3 ? `(${currentPeriodOrdinal})` : ''}</h6>
  } else if ((away.score > home.score && homeId === teamId)) {
    return <h6 className="text-danger">L {currentPeriod > 3 ? `(${currentPeriodOrdinal})` : ''}</h6>
  } else if ((away.score > home.score && homeId !== teamId)) {
    return <h6 className="text-success">W {currentPeriod > 3 ? `(${currentPeriodOrdinal})` : ''}</h6>
  } else {
    return <h6 className="text-warning">X {currentPeriod > 3 ? `(${currentPeriodOrdinal})` : ''}</h6>
  }
}
 
  return (
    <Button href={`${gamePk}`} variant='outline-secondary' style={{width: '100%', margin: 'auto'}}> 
          <h6 className="text-black">{homeId === teamId ? 'vs' : '@'} {homeId === teamId ? getTeamAbbr(away) : getTeamAbbr(home)}</h6>
          <Row>
            <Col>
              <h6 className="text-black">
                {home.score > away.score ? `${home.score} - ${away.score}` : `${away.score} - ${home.score}`}  
              </h6>
            </Col>
            <Col>
              {(result())} 
            </Col>
          </Row>
    </Button>
  )
}

export default GamesPrevGameRecord

//  opponent
// home or away
// result (OT / SO)
// score
// 