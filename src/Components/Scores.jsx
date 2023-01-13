import { ScoresData } from "../Models/ScoresData"

const Scores = () => {
  const { games } = ScoresData.dates[0]

  let scoreboard = games.map((game, i) => {
    const { gamePk } = game
    const { away, home} = game.teams
    return (
      <div key={gamePk}>
        <h6>{`${away.team.name} at ${home.team.name}`}</h6>
      </div>
    )
  })

  return (
    <div>
      SCORES PAGE
      {scoreboard}
    </div>
  )
}

export default Scores