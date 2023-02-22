import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"

import GamesBoxscore from "./GamesBoxscore"
import GamesScoring from "./GamesScoring"
import GamesPenalties from "./GamesPenalties"
import styleColor from "../functions/styleColor"
import GamesPlayCard from "./GamesPlayCard"
import GamesPlayEvents from "./GamesPlayEvents"
import ToggleButtons from "../ToggleButtons"
import GamesStats from "./GamesStats"
import GamesPlays from "./GamesPlays"
import GamesOnIce from "./GamesOnIce"
import GamesLiveHighlights from "./GamesLiveHighlights"
import GamesHeader from "./GamesHeader"


const GamesLive = ({ liveData }) => {
  const { boxscore, linescore, plays } = liveData
  const { teams } = boxscore
  const { periods, hasShootout, currentPeriod } = linescore
  const { away, home } = teams
  const { allPlays } = plays

  let lastPlay = allPlays[allPlays.length - 1]

  const [radioLeftNme, setRadioLeftNme] = useState('Boxscore')
  const [radioRightNme, setRadioRightNme] = useState('Game')



  const radiosRight = [
    { nme: 'Game' },
    { nme: 'Stats' },
  ];

  const radiosLeft = [
    { nme: 'Boxscore' },
    { nme: 'Highlights' },
  ];

  const teamHeader = (team) => {
    const { name } = team.team
    return name
  }

  const teamId = (team) => {
    const { id } = team.team
    return id
  }

  const teamScore = (team) => {
    const { teamStats } = team
    const {  teamSkaterStats } = teamStats
    const { goals } = teamSkaterStats
    return goals
  }
  
  const gameTime = () => {
    const { about } = lastPlay
    const { ordinalNum, periodTimeRemaining } = about 
    return (
      <div>
        <h6 className='text-center'>{ordinalNum}</h6>
        <h6 className='text-center'>{periodTimeRemaining}</h6>
      </div>
    )
  }

  const content = (radioNme) => {
    switch (radioNme) {
      case 'Game':
        return (
          <Stack gap={2}>
            <GamesOnIce boxscore={boxscore} linescore={linescore} />
            <div className='bg-white p-2 shadow rounded'>
              <h5>Last Play</h5>
              <GamesPlayEvents playData={lastPlay} /> 
            </div>
            <div className='bg-white p-2 shadow rounded'>
              <h5>All Plays</h5>
              <GamesPlays plays={plays} />
            </div>
          </Stack>
        )
      case 'Stats':
        return <GamesStats boxscore={boxscore}/>
      case 'Boxscore':
        return (
          <Stack gap={2}>
            <GamesBoxscore boxscore={boxscore} linescore={linescore} lastPlay={lastPlay}/>
            <GamesScoring plays={plays} currentPeriod={currentPeriod}/>
            <GamesPenalties plays={plays} currentPeriod={currentPeriod} />
          </Stack>
        )
      case 'Highlights':
          return <GamesLiveHighlights />
      default:
        return <p>MISSING CONTENT</p>
    }
  }

  return (
    <Stack gap={3}>
      <GamesHeader linescore={linescore} abstractGameState={'Live'} />
      <Container>
        <Row>
          <Col md={3}>
          <Stack gap={2}>
            <ToggleButtons className='bg-white text-center p-2 shadow rounded' radioNme={radioLeftNme} setRadioNme={setRadioLeftNme} radios={radiosLeft} />
            {content(radioLeftNme)}
          </Stack>

          </Col>
          <Col>
            <Stack gap={2}>
              
              <ToggleButtons className='bg-white text-center p-2 shadow rounded' radioNme={radioRightNme} setRadioNme={setRadioRightNme} radios={radiosRight} />
              {content(radioRightNme)}

            </Stack>
          </Col>
        </Row>
      </Container>
    </Stack>
  )
}

export default GamesLive