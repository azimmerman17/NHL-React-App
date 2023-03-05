import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesPlayersToWatch from "./GamesPlayersToWatch"
import styleColor from "../functions/styleColor"
import GamesGoalieCompare from "./GamesGoalieCompare"
import GamesInactives from "./GamesInactives"

const GamesPreviewPlayers =  ({ awayTeam, homeTeam }) => {
  const skaterWatchStats = [
    'Goals',
    'Assists',
    'Points',
    'Faceoff%',
    'TOI',
    'Shots',
    'Hits',
    'PIM'
  ]

  const teamName = (teamData) => {
    const { locationName, id } = teamData
    return <h5 style={{color: styleColor(id)}}>{locationName}</h5>
  }

  return (
    <Stack gap={2}>
      <Stack className='bg-white p-2 shadow rounded' gap={1}>
        <h5 className='text-center'>Players to Watch</h5>
        <Row>
          <Col className='text-center'>{teamName(awayTeam)}</Col>
          <Col className='text-center'>{teamName(homeTeam)}</Col>
        </Row>
        <GamesPlayersToWatch homeTeam={homeTeam} awayTeam={awayTeam} skaterStats={skaterWatchStats} />
        <h5 className='text-center'>Goalies</h5>
        <Row>
          <Col>
            <GamesGoalieCompare team={awayTeam} homeAway='away' />
          </Col>
          <Col>
            <GamesGoalieCompare team={homeTeam}  homeAway='home' />
          </Col>
        </Row>
        <h6 className='text-center'>Inactives</h6>
        <Row >
          <Col>
            <GamesInactives team={awayTeam} homeAway='away' />
          </Col>
          <Col>
            <GamesInactives team={homeTeam}  homeAway='home' />
          </Col>
        </Row>
      </Stack>
    </Stack>
  )
}

export default GamesPreviewPlayers