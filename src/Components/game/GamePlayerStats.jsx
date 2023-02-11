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
    const { coaches, scratches, players } = team
    const { name } = team.team

    const posTable = positions.map((position, i) => {
      return (
        position === 'Goalie' ? <GamesGoalieTable key={`${position}-${name}-${i}`} positionName={position} team={team} /> : <GamesSkaterTable key={`${position}-${name}`} positionName={position} team={team} />
      )
    }) 

    const scratched = () => {
      let list =[]
      scratches.forEach(scratch => {
        let key = `ID${scratch}`
        let player

        for (const objKey in players) {
          if (key === objKey) {
            player = players[key]
            const { person } = player
            const { fullName } = person
            list.push(fullName)
          }
        }
      })
      return (
        <div>
          <h6>Scratches</h6>
          <p className='px-5'>{list.join(', ')}</p>
        </div>
      )
    }

    const headCoach = coaches.map((coach, i) => {
      const { person, position } = coach
      const { type } = position
      const { fullName } = person
      if ( type === 'Head Coach') {
        return (
          <div>
          <h6>Coaches</h6>
          <p className='px-5' key={`${fullName}-${i}`}>{fullName}</p>
        </div>
        )
      }
    })

    return (
      <Stack className='bg-white p-2 shadow rounded' gap={1}>
        <h4 style={{color: styleColor(name)}}>{name}</h4>
        {posTable}
        {scratched()}
        {headCoach}
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