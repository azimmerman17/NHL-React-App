import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import styleColor from "../functions/styleColor"


const GamesGoalies = ({ player, team }) => {
  const { person, jerseyNumber, position } = player
  const { rosterStatus, link, fullName, id, currentTeam } = person
  const { abbreviation } = position
  const teamId = currentTeam.id


  let [stats, setStats] = useState([])

  useEffect(() => {
    const fetchPlayerStats = async (link) => {
      const BASE_URL = 'https://statsapi.web.nhl.com'
      const url = BASE_URL + link
      const response = await fetch(url)     
      let data = await response.json()
      const { stats } = data
      setStats(stats)
    }
    if (rosterStatus === 'Y' && abbreviation === 'G') {
      const playerLink = `${link}/stats?stats=statsSingleSeason`
      fetchPlayerStats(playerLink)
    }
  },[])

  const goalie = () => {
    if (stats.length) {
      const { splits } = stats[stats.length - 1]
      const { stat } = splits[splits.length - 1]
      const { wins, losses, ot, goalAgainstAverage, savePercentage, shutouts } = stat

      return (
        <Container className='bg-white p-2  my-2 shadow rounded'>
          <Row className={team === 'home' ? 'd-flex flex-row-reverse m-1' : 'm-1'}>
            <Col className={team === 'home' ? 'my-auto text-end mx-0' : 'my-auto mx-0'} sm={3}>
              <img className='rounded-circle' style={{border: `1px solid ${styleColor(teamId)}`}} src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${id}.jpg`} alt=''></img>
            </Col>
            <Col className={team === 'home' ? 'my-auto text-end m-0' : 'my-auto mx-0'}>
              <h6>{fullName}</h6>
              <p><small>#{jerseyNumber} {abbreviation}</small></p>
            </Col>
          </Row>
          <Row className='text-center m-0'>
            <Col>
              <p className='text-secondary m-0'><small>Record</small></p>
              <p className='m-0'><small>{wins}-{losses}-{ot}</small></p>
            </Col>
            <Col>
              <p className='text-secondary  m-0'><small>GAA</small></p>
              <p className='m-0'><small>{goalAgainstAverage.toFixed(2)}</small></p>
            </Col>
            <Col>
              <p className='text-secondary  m-0'><small>SV%</small></p>
              <p className='m-0'><small>{savePercentage.toFixed(3)}</small></p>
            </Col>
            <Col>
              <p className='text-secondary m-0'><small>SO</small></p>
              <p className='m-0'><small>{shutouts}</small></p>
            </Col>

          </Row>

          
        </Container>
      )
    }
  }

  return (
    <div>
      {goalie()}
    </div>
  )
}

export default GamesGoalies