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
import GamesPreviewPlayers from "./GamesPreviewPlayers"

const GamesPreview = ({ data , scheduleData, teamData, homeTeam, awayTeam, setHomeTeam, setAwayTeam}) => {
  const { gameData, liveData } = data
  const {  broadcasts, teams } = scheduleData
  const { linescore } = liveData
  const { datetime } = gameData
  const { home, away } = gameData.teams
  

  const teamId = (team) => {
    const { id } = team 
    return id
  }

  
  useEffect(() => {
    const fetchPlayerStats = async (link) => {
      const BASE_URL = 'https://statsapi.web.nhl.com'
      const url = BASE_URL + link
      const response = await fetch(url)     
      let data = await response.json()
      const { stats } = data
      return stats
    }
    
    const getTeam = async (teamId) => {
      let team
      const { teams } = teamData
      teams.forEach(curTeam => {
        if (curTeam.id === teamId) {
          const { roster } = curTeam.roster
          roster.forEach( async (player) => {
          const { person } = player
          const { link } = person
          const playerLink = `${link}/stats?stats=statsSingleSeason`
          const playerStat = await fetchPlayerStats(playerLink)
          player.stats =  playerStat
          })
          teamId === home.id ? setHomeTeam(curTeam) : setAwayTeam(curTeam)
        }
      })
    }
  
    getTeam(teamId(home))
    getTeam(teamId(away))
  }, [])

  const render = () => {
    try {
      if (homeTeam.roster.roster) {
       return <GamesPreviewPlayers homeTeam={homeTeam} awayTeam={awayTeam}/>
      }
    } catch (error) {
    }


  }
    
    return (
      <Stack gap={3} className='mt-3'>
      <GamesHeader linescore={linescore} abstractGameState={'Preview'} datetime={datetime} broadcasts={broadcasts}/>
    <Container>
      <Row>
        <Col md={8}>
          <Stack gap={2}>
            <GamesTeamsRecords teams={teams} />
            <GamesPreviewArticle />
            {/* <GamesPreviewPlayers homeTeam={homeTeam} awayTeam={awayTeam}/> */}
            {render()}
          </Stack>
        </Col>
        <Col md={4}>
        <Stack gap={2}>
          <GamesTeamStatsPreview teamData={teamData} gameData={gameData} />
          <GamesPrev  gameData={gameData} teamData={teamData}/>
        </Stack>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesPreview