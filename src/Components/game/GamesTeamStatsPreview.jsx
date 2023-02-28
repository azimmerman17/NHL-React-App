import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"
import GamesTeamStatsPreviewRow from "./GamesTeamStatsPreviewRow"

const GamesTeamStatsPreview = ({ teamData, gameData  }) => {
  const { teams } = gameData
  const { home, away } = teams

  const stats = [
    'PP%',
    'PK%',
    'FO%',
    'GF',
    'GA',
    'SHOT%',
    'SV%'
  ]  

  const code = (team) => {
    const { triCode, id } = team
    return <h5 className='text-center' style={{color:styleColor(id)}}>{triCode}</h5>
  }

  const getTeam = (team) => {
    const teamId = team.id
    let teamPk
    const {  teams } = teamData
    teams.forEach(curTeam => {
      if (curTeam.id === teamId) teamPk = curTeam
    })
   return teamPk
  }

  const homeTeam = getTeam(home)
  const awayTeam = getTeam(away)

  const statHeadings = stats.map((stat) => {
    return (
      <Row key={stat} className='m-1 shadow rounded text-center'>
        <Col sm={4} className='p-0'>
          <GamesTeamStatsPreviewRow statistic={stat} team={awayTeam} />
        </Col>
        <Col className='my-auto'>
          {stat}
        </Col>
        <Col sm={4} className='p-0'>
          <GamesTeamStatsPreviewRow statistic={stat} team={homeTeam} />
        </Col>
      </Row>
    )
  })

  return (
     <Stack gap={1}>
      <h6>Team Stats</h6>
      <Container className='bg-white p-2 shadow rounded text-center'>
        <Row>
          <Col sm={5}>
            {code(away)}
          </Col>
          <Col>
          </Col>
          <Col sm={5}>
            {code(home)}
          </Col>
        </Row>
        <Stack gap={2} >
          {statHeadings}
        </Stack>
      </Container>
    </Stack>
  )
}

export default GamesTeamStatsPreview