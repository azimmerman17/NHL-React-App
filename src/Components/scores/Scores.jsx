import Stack from 'react-bootstrap/Stack';

import { ScoresData } from "../../Models/ScoresData"
import ScoresDate  from './ScoresDate'
import ScoresCard from './ScoresCard';

const Scores = () => {
  const { games, date } = ScoresData.dates[0]

  let scoreboard = games.map((game) => {
    const { gamePk } = game

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