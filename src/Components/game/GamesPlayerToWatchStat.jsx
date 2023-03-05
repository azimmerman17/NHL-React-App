import { useEffect, useState } from "react"
import GamesPlayersMaxStat from "./GamesPlayersMaxStat"

const GamesPlayersToWatchStat = ({ teamData, statistic, team }) => {
  const { record } = teamData
  const { roster } = teamData.roster
  const { gamesPlayed } = record
  let [playerLeader, setPlayerLeader] = useState({})
  let [maxStat, setMaxStat] = useState(-1)


  const fetchPlayerStats = async (link) => {
    const BASE_URL = 'https://statsapi.web.nhl.com'
    const url = BASE_URL + link
    const response = await fetch(url)     
    let data = await response.json()
    const { stats } = data
    return stats
  }

  const getKey = (statistic) => {
    switch (statistic) {
      case 'Goals':
        return 'goals'
      case 'Assists': 
        return 'assists'
      case 'Points':
        return 'points'
      case 'Faceoff%':
        return 'faceOffPct'
      case 'TOI':
        return 'timeOnIcePerGame'
      case 'Shots':
        return 'shots'
      case 'Hits':
        return 'hits'
      case 'PIM':
        return 'pim'
      default:
        return 'xxx'
    }
  }

  const convertTimeToNumber = (time) => {
    let minutes = Number(time.substr(0,2))
    let seconds = Number(time.substr(3,2)) / 60
    return minutes + seconds
  }


  const statKey = getKey(statistic)
  const qualified = Math.round(gamesPlayed * .666)

  useEffect(() => {
    roster.forEach(async (player) => {
      const { person } = player
      const { rosterStatus, link, primaryPosition } = person
      const { code } = primaryPosition
      if (rosterStatus === 'Y' && code !== 'G') {
        const playerLink = `${link}/stats?stats=statsSingleSeason`
        const playerStat = await fetchPlayerStats(playerLink)
        if (playerStat.length) {
          const { splits } = playerStat[playerStat.length - 1]
          const { stat } = splits[0]
          const { games } = stat
          if (games >= qualified) {
            for (const key in stat) {
              if (key === statKey) {
                let time
                if (key === 'timeOnIcePerGame') {
                  time = convertTimeToNumber(stat[key])
                }
                if (stat[key] > maxStat || time > maxStat) {
                  setPlayerLeader(player)
                  setMaxStat(stat[key])
                }
              }
            }
          }
        }
      }
    })
  })

  const render = () => {
    if (maxStat !== -1) {
      return (
        <GamesPlayersMaxStat maxStat={maxStat} player={playerLeader} team={team} />
      )
    }
  }

  return (
    <div>
      {render()}
    </div>
  )
}

export default GamesPlayersToWatchStat