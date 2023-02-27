import Stack from "react-bootstrap/Stack"

import GamesPrevGameRecord from "./GamesPrevGameRecord"

const GamesPrevGamesList = ({ prevGamesData, teamId, otherId, dateTime, setLink }) => {

  const getDate = (offset) => {
    let newDate = new Date(dateTime)
    newDate.setDate(newDate.getDate() - offset)
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  }

  let startDate = getDate(14)
  let endDate = getDate(1)
  let teamPrevGames =[]
  setLink(`api/v1/schedule?hydrate=team,linescore&teamId=${teamId},${otherId}&startDate=${startDate}&endDate=${endDate}`)

  try {
    const { dates } = prevGamesData
    dates.forEach(date => {
      const { games } = date
      games.forEach(game => {
        const { teams } = game
        const { away, home } = teams

        const gameTeamId = (team) => {
          const { id } = team.team
          return id
        }
        
        const gameHomeId = gameTeamId(home)
        const gameAwayId = gameTeamId(away)
        if (gameHomeId === teamId || gameAwayId === teamId) {
          teamPrevGames.unshift(game)
        }
      })
    });
  } catch (error) {
    setLink(`api/v1/schedule?hydrate=linescore&teamId=${teamId},${otherId}&startDate=${startDate}&endDate=${endDate}`)
  }

  const render = teamPrevGames.map(game => {
      const { gamePk } = game
      return (
       <div className='bg-white p-2 shadow rounded' style={{width: '95%', margin: 'auto'}} key={`${gamePk}-${teamId}`}>
          <GamesPrevGameRecord game={game} teamId={teamId} />
        </div>
      )
    })
  
 return (
  <Stack gap={1}>
    {render}
  </Stack>
 )
}

export default GamesPrevGamesList