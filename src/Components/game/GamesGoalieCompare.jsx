import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"
import GamesGoalies from "./GamesGoalies"

const GamesGoalieCompare = ({ team, homeAway }) => {
  const { record } = team
  const { roster } = team.roster
  const { gamesPlayed } = record

  const goalies = roster.map((player) => {
      const { person } = player
      const { rosterStatus, link, primaryPosition, id } = person
      const { code } = primaryPosition
      if (rosterStatus === 'Y' && code === 'G') {
        return (
          <div key={id}>
            <GamesGoalies player={player} team={homeAway} />
          </div>
        )
      }
    })

  return (
    <Stack gap={2}>
      {goalies}
    </Stack>
  )
}

export default GamesGoalieCompare