import { useEffect, useState } from "react"  
import { useParams } from "react-router-dom"

import GamesPreview from "./GamesPreview"
import GamesFinal from "./GamesFinal"
import GamesLive from "./GamesLive"
import formatDate from "../functions/formatDate"

import { GamesDataPreview } from "../../Models/GamesPreview"
import { GamesDataLive } from "../../Models/GamesLive"


const Games = ({ data, setPath, setTitle }) => {
  let { gameId } = useParams()
  let [scheduleData, setscheduleData] = useState({})
  let [teamData, setTeamData] = useState({})
  const link = `/api/v1/game/${gameId}/feed/live`

  //  // API CONNECTION
  useEffect(() => {
    try {
      const { gameData } = data
      const { datetime, teams } = gameData
      const { dateTime} = datetime
      const { home, away } = teams

      const code = (team) => {
        const { triCode } = team 
        return triCode
      }

      const teamId = (team) => {
        const { id } = team 
        return id
      }

      const fetchData = async (link) => {
        const BASE_URL = 'https://statsapi.web.nhl.com'
        const url = BASE_URL + link
        const response = await fetch(url)     
        let data = await response.json()
        if (schduleLink === link) {
        const { dates } = data
        const { games } = dates[0]
          data = games.filter(game => game.gamePk === Number(gameId))
          setscheduleData(data[0])
        }
        if (teamsLink === link) {
          setTeamData(data)
        }

      }
      
      setTitle(`Game - ${code(away)} @ ${code(home)}`)

      const schduleLink = `/api/v1/schedule?startDate=${formatDate(new Date(dateTime))}&endDate=${formatDate(new Date(dateTime))}&hydrate=broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,seriesSummary(series)&expand=team.stats`
      fetchData(schduleLink)

      const teamsLink = `/api/v1/teams/?teamId=${teamId(home)},${teamId(away)}&expand=team.stats,team.roster,team.leaders,team.record,team.playoffs,team.name,roster.person`
      fetchData(teamsLink)

      } catch (error){
      console.log(error)
      setPath(link)
    }
  },[data])
  
  const render = () => {
    if (data.gameData && scheduleData.gamePk && teamData.copyright) {
      const { gameData, liveData } = data
      const { status } = gameData
      const { abstractGameState } = status

      switch (abstractGameState) {
        case 'Preview':
          return (
            <GamesPreview data={data} scheduleData={scheduleData} teamData={teamData}/>
          )
        case 'Live':
          // data = GamesDataLive 
          return (
            <GamesLive liveData={liveData} scheduleData={scheduleData} />
          )
        case 'Final':
          return (
            <GamesFinal liveData={liveData} />
          )
        default:
          return (
            <div>
              NOT BUILT
            </div>
          )

      }
  
    }
  }
  
  return (
    <div>
      {render()}
    </div>
  )
  
  
}

export default Games