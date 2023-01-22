import { ScoresData } from "../../Models/ScoresData"
import ScoresPreview from "./ScoresPreview"
import ScoresLive from "./ScoresLive"
import ScoreFinal from "./ScoresFinal"

const Scores = () => {
  const { games } = ScoresData.dates[0]

  let scoreboard = games.map((game) => {
    const { gamePk, teams, status } = game
    const { away, home} = teams
    const { abstractGameState } = status
    switch (abstractGameState) {
      case 'Preview': 
        return (
          <div>
            <ScoresPreview game={game} />
            <hr/>
          </div>
        )
      case 'Live': 
      return (
        <div>
            <ScoresLive game={game} />
            <hr/>
          </div>
        )
      case 'Final': 
      return (
        <div>
            <ScoreFinal game={game} />
            <hr/>
          </div>
        )
      default:
        return <h4>{abstractGameState} MISSING</h4>
    }
  })

  return (
    <div>
      SCORES PAGE
      {scoreboard}
    </div>
  )
}

export default Scores