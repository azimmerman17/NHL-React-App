import Stack from "react-bootstrap/Stack"

import GamesGoalCard from "./GamesGoalCard"
import GetEventArrey from "../functions/GetEventArray"


const GamesScoring = ({ plays, currentPeriod }) => {
  const { allPlays, scoringPlays } = plays
  const  periods = GetEventArrey(allPlays, scoringPlays)

  let periodNames = [
    '1st', 
    '2nd',
    '3rd',
  ]

  const goals = periods.map((period, i) => {
    if (i < currentPeriod) {
      return (
        <div key={i}>
          <h6><small>{i < 4 ? `${periodNames[i]} Period` : 'Overtime'}</small></h6>
          <GamesGoalCard period={period} />
        </div>
      )
    }
    return null
  })

  return (
    <Stack gap={1}>
      <h4>Scoring Plays</h4>
      {goals}
    </Stack>
  )
}

export default GamesScoring