import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesPlayersToWatchStat from "./GamesPlayerToWatchStat"

const GamesPlayersToWatch = ({ awayTeam, homeTeam, skaterStats }) => {

  const playersToWatch = skaterStats.map(stat => {
    return (
      <Row key={stat} className='bg-white p-2  m-1 shadow rounded'>
        <Col className='text-start' sm={5}>
          <GamesPlayersToWatchStat teamData={awayTeam} statistic={stat} team={'away'} />
        </Col>
        <Col className='text-center my-auto'>
          {stat}
        </Col>
        <Col sm={5}>
         <GamesPlayersToWatchStat teamData={homeTeam} statistic={stat} team={'home'} />
        </Col>
      </Row>
    )
  })

  return (
    <div>
      {playersToWatch}
    </div>

  )
}

export default GamesPlayersToWatch