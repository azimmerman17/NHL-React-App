import { useState } from "react"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesBoxscore from "./GamesBoxscore"
import GamesScoring from "./GamesScoring"
import GamesPenalties from "./GamesPenalties"
import GamesStarsofGame from "./GamesStarsofGame"
import ToggleButtons from "../ToggleButtons"
import GamesRecap from "./GamesRecap"
import GamesStats from "./GamesStats"
import GamesPlays from "./GamesPlays"
import GamesHeader from "./GamesHeader"

const GamesFinal = ({ liveData }) => {
  const { boxscore, linescore, plays, decisions } = liveData
  const { currentPeriod } = linescore
  const { allPlays } = plays

  let lastPlay = allPlays[allPlays.length - 1]

  const [radioNme, setRadioNme] = useState('Recap')

  const radios = [
    { nme: 'Recap' },
    { nme: 'Stats' },
    { nme: 'Plays' },
  ];
  
  const content = () => {
    switch (radioNme) {
      case 'Recap':
        return <GamesRecap />
      case 'Stats':
        return <GamesStats boxscore={boxscore}/>
      case 'Plays':
        return <GamesPlays plays={plays} />
      default:
        return <p>MISSING CONTENT</p>
    }
  }

  return (
    <Stack gap={3} className='mt-3'>
      <GamesHeader linescore={linescore} abstractGameState={'Final'} />
        <Row>
          <Col md={9}>
            <Stack gap={2} >
              <ToggleButtons className='bg-white text-center p-2 shadow rounded' radioNme={radioNme} setRadioNme={setRadioNme} radios={radios} /> 
              {content()}
            </Stack>
          </Col>
          <Col md={3}>
            <Stack gap={2}>
              <GamesBoxscore boxscore={boxscore} linescore={linescore} lastPlay={lastPlay}/>
              <GamesScoring plays={plays} currentPeriod={currentPeriod}/>
              <GamesPenalties plays={plays} currentPeriod={currentPeriod} />
              <GamesStarsofGame decisions={decisions} boxscore={boxscore}/>
            </Stack>
          </Col>
        </Row>
    </Stack>
  )
}

export default GamesFinal