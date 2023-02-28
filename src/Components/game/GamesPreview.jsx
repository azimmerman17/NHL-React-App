import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesHeader from "./GamesHeader"
import GamesTeamsRecords from "./GamesTeamsRecords"
import GamesPreviewArticle from "./GamesPreviewArticle"
import GamesPrev from "./GamesPrev"
import GamesTeamStatsPreview from "./GamesTeamStatsPreview"

const GamesPreview = ({ data , scheduleData, teamData}) => {
  const { gameData, liveData } = data
  const {  broadcasts, teams } = scheduleData
  const { linescore } = liveData
  const { datetime, } = gameData
  let { gameId } = useParams()

  const teamId = (team) => {
    const { id } = team 
    return id
  }
  
  return (
    <Stack gap={4} className='mt-3'>
      <GamesHeader linescore={linescore} abstractGameState={'Preview'} datetime={datetime} broadcasts={broadcasts}/>
    <Container>
      <Row>
        <Col md={8}>
          <Stack gap={3}>
            <GamesTeamsRecords teams={teams} />
            <GamesPreviewArticle />
            <p>top players</p>
            <p>goalies</p>
            <p>team rosters</p>
          </Stack>
        </Col>
        <Col md={4}>
        <Stack gap={3}>
          <GamesTeamStatsPreview teamData={teamData} gameData={gameData} />
          <GamesPrev  gameData={gameData} teamData={teamData}/>
          <p>game location</p>
        </Stack>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesPreview