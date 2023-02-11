import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import styleColor from "../functions/styleColor"

import GamesSkaterTable from "./GamesSkaterTable"
import GamesGoalieTable from "./GamesGoalieTable"

const GamesPlayerStats = ({ teams }) => {
  const { home, away } = teams

  const positions = [
    'Forward',
    'Defenseman',
    'Goalie'
  ]

  const TeamBoxscore = (team) => {
    const { name } = team.team

    const posTable = positions.map(position => {
      return (
        position === 'Goalie' ? <GamesGoalieTable key={`${position}-${name}`} positionName={position} team={team} /> : <GamesSkaterTable key={`${position}-${name}`} positionName={position} team={team} />
      )
    }) 

    return (
      <Stack className='bg-white p-2 shadow rounded'>
        <h5 style={{color: styleColor(name)}}>{name}</h5>
        {posTable}
        <p>Skratches</p>
      <p>coaches</p>
      </Stack>
    )
  }
 
  return (
    <Stack gap={2}>
      {TeamBoxscore(away)}
      {TeamBoxscore(home)}
    </Stack>
  )
}

export default GamesPlayerStats