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
import styleColor from "../functions/styleColor"
import GamesRecap from "./GamesRecap"
import GamesStats from "./GamesStats"
import GamesPlays from "./GamesPlays"

const GamesFinal = ({ liveData }) => {
  const { boxscore, linescore, plays, decisions } = liveData
  // const { teams } = boxscore
  const { teams, periods, hasShootout, currentPeriod } = linescore
  const { away, home } = teams
  const { allPlays } = plays

  let lastPlay = allPlays[allPlays.length - 1]

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

  const teamId = (team) => {
    const { id } = team.team
    return id
  }

  const teamScore = (team) => {
    const { goals } = team
    return goals
  }

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
      <Container>
        <Row>
          <Col md={9}>
            <Stack gap={2} >
              <Container className='bg-white p-2 shadow rounded m-a'>
                <Row>
                  <Col md={4}>
                    <h3 className='text-left' style={{color: styleColor(teamId(away))}}>{teamHeader(away)}</h3>
                  </Col>
                  <Col>
                    <h3 className='text-left' style={{color: styleColor(teamId(away))}}>{teamScore(away)}</h3>
                  </Col>
                  <Col>
                    <h6 className='text-center'>Final</h6>
                  </Col>
                  <Col>
                    <h3 className='text-right' style={{color: styleColor(teamId(home))}}>{teamScore(home)}</h3> 
                  </Col>
                  <Col  className='text-end' md={4}>
                    <h3 className='text-right' style={{color: styleColor(teamId(home))}}>{teamHeader(home)}</h3> 
                  </Col>
                </Row>
              </Container>
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
      </Container>
    </Stack>
  )
}

export default GamesFinal