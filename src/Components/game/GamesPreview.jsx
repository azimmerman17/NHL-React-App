import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesHeader from "./GamesHeader"
import GamesTeamsRecords from "./GamesTeamsRecords"
import GamesPreviewArticle from "./GamesPreviewArticle"

const GamesPreview = ({ data , scheduleData }) => {
  const { gameData, liveData } = data
  const {  broadcasts, teams } = scheduleData
  const { linescore } = liveData
  const { datetime, } = gameData
  let { gameId } = useParams()

  const teamId = (team) => {
    const { id } = team 
    return id
  }
  console.log(data)
    
  return (
    <Stack gap={4} className='mt-3'>
      <GamesHeader linescore={linescore} abstractGameState={'Preview'} datetime={datetime} broadcasts={broadcasts}/>
    <Container>
      <Row>
        <Col md={8}>
        <h2>GAME</h2>
          <h2>PLAYERS</h2>
          <Stack gap={3}>
            <GamesTeamsRecords teams={teams} />
            <GamesPreviewArticle />
          </Stack>
\        </Col>
        <Col md={4}>
          <h2>TEAMS</h2>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesPreview