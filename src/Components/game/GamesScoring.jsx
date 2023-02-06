import Stack from "react-bootstrap/Stack"
import GamesGoalCard from "./GamesGoalCard"


const GamesScoring = ({ plays, currentPeriod }) => {
  const { allPlays, scoringPlays } = plays

  let periods = [
    [],   // 1st
    [],   // 2nd
    [],   // 3rd
    [],   // OT
  ]

  let periodNames = [
    '1st', 
    '2nd',
    '3rd',
  ]

  scoringPlays.forEach(scoringPlay => {
    const goal = allPlays[scoringPlay]
    const { about } = goal
    const { period } = about
    periods[period - 1].push(goal)
  });

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