import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styleColor from "../functions/styleColor"

const GamesTeamStatsPreviewRow = ({ statistic, team }) => {
  const { id, teamStats } = team
  const { splits } = teamStats[0]

  const teamStat = (stat, i) => {
    const { goalsAgainstPerGame, goalsPerGame, penaltyKillPercentage, powerPlayPercentage, savePctg, shootingPctg, faceOffWinPercentage, savePctRank, shootingPctRank } = stat
    switch (statistic) {
      case 'PP%':
        return i === 0 ? `${powerPlayPercentage}%` : powerPlayPercentage
      case 'PK%':
        return i === 0 ? `${penaltyKillPercentage}%` : penaltyKillPercentage
      case 'FO%':
        return i === 0 ? `${faceOffWinPercentage}%` : faceOffWinPercentage
      case 'GF':
        return goalsPerGame
      case 'GA':
        return goalsAgainstPerGame
      case 'SHOT%':
        return i === 0 ? `${shootingPctg}%` : shootingPctRank
      case 'SV%':
        return savePctg || shootingPctRank
      default:
        return 'XXX'     
    }
  }

  const split = (i) => {
    const { stat } = splits[i]
    if (i === 0) {
      return (
        <h6 className='text-white'>
         {teamStat(stat, i)}
        </h6>
      )
    } else {
      return (
        <h6 className='text-white'>
         <small>{teamStat(stat, i)}</small>
        </h6>
      )
    }
  }

  return (
    <div className='p-1 rounded my-auto' style={{backgroundColor: styleColor(id)}}>
      {split(0)}
      {split(1)}
    </div>

  )
}

export default GamesTeamStatsPreviewRow