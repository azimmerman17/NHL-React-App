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
import styleColor from "../styleColor"
import GamesRecap from "./GamesRecap"
import GamesStats from "./GamesStats"
import GamesPlays from "./GamesPlays"

const GamesFinal = ({ liveData }) => {
  const { boxscore, linescore, plays, decisions } = liveData
  const { teams } = boxscore
  const { periods, hasShootout, currentPeriod } = linescore
  const { away, home } = teams

  const [radioNme, setRadioNme] = useState('Recap')

  const radios = [
    { nme: 'Recap' },
    { nme: 'Stats' },
    { nme: 'Plays' },
  ];

  const teamHeader = (team) => {
    const { name } = team.team
    return name
  }

  const content = () => {
    switch (radioNme) {
      case 'Recap':
        return <GamesRecap />
      case 'Stats':
        return <GamesStats />
      case 'Plays':
        return <GamesPlays />
      default:
        return <p>MISSING CONTENT</p>
    }
  }

  return (
    <Stack gap={3} className='mt-3'>
    <Container>
      <Row>
        <Col md={9}>
          <Stack className='bg-white text-center p-2 shadow rounded' gap={2} >
            <h3 >
              <span style={{color: styleColor(teamHeader(away))}}>{teamHeader(away)}</span>
              <span> @ </span>
              <span style={{color: styleColor(teamHeader(home))}}>{teamHeader(home)}</span> 
            </h3>
            <ToggleButtons radioNme={radioNme} setRadioNme={setRadioNme} radios={radios} /> 
          </Stack>
          {content()}
        </Col>
        <Col md={3}>
          <Stack gap={2}>
            <GamesBoxscore teams={teams} periods={periods} hasShootout={hasShootout} />
            <GamesScoring plays={plays} currentPeriod={currentPeriod}/>
            <GamesPenalties plays={plays} currentPeriod={currentPeriod} />
            <GamesStarsofGame decisions={decisions} teams={teams}/>
          </Stack>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesFinal