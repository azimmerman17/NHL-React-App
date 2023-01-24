import Stack from 'react-bootstrap/Stack';

import { ScoresData } from "../../Models/ScoresData"
import ScoresDate  from './ScoresDate'
import ScoresCard from './ScoresCard';

const Scores = () => {
  const { games, date } = ScoresData.dates[0]

  let scoreboard = games.map((game) => {
    const { gamePk, teams, status } = game
      const { away, home} = teams
      const { abstractGameState } = status
    //   switch (abstractGameState) {
    //     case 'Preview': 
    //       return (
    //         <div key={gamePk}>
    //           <ScoresPreview game={game} />
    //           <hr/>
    //         </div>
    //       )
    //     case 'Live': 
    //     return (
    //       <div key={gamePk}>
    //           <ScoresLive game={game} />
    //           <hr/>
    //         </div>
    //       )
    //     case 'Final': 
    //     return (
    //       <div key={gamePk}>
    //           <ScoreFinal game={game} />
    //           <hr/>
    //         </div>
    //       )
    //     default:
    //       return <h4>{abstractGameState} MISSING</h4>
    //   }
    return (
      <div key={gamePk}>
        <ScoresCard game={game} />
        <hr/>
      </div>
    )
  })

  return (
    <Stack gap={3}>
      <h2>Scores</h2>
      <hr/>
      <ScoresDate date={date} />
      <hr/>
      {scoreboard}
    </Stack>
  )
}

export default Scores