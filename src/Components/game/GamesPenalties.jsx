import Stack from "react-bootstrap/Stack"
import GetEventArrey from "../functions/GetEventArray"

import GamesPenaltyCard from "./GamesPenaltyCard"

const GamesPenalties = ({ plays, currentPeriod }) => {
  const { allPlays, penaltyPlays } = plays
  const  periods = GetEventArrey(allPlays, penaltyPlays)

  let periodNames = [
    '1st', 
    '2nd',
    '3rd',
  ]

  const penalties = periods.map((period, i) => {
    if (i < currentPeriod) {
      return (
        <div key={i}>
          <h6><small>{i < 4 ? `${periodNames[i]} Period` : 'Overtime'}</small></h6>
          <GamesPenaltyCard period={period} />
        </div>
      )
    }
    return null
  })

  return (
    <Stack gap={1}>
      <h4>Penalties</h4>
      {penalties}
    </Stack>
  )
}

export default GamesPenalties