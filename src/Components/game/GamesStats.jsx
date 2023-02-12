import Stack from "react-bootstrap/Stack"

import GamesPlayerStats from "./GamesPlayerStats"
import GamesOfficials from "./GamesOfficials"
import GamesTeamsStats from "./GamesTeamStats"

const GamesStats = ({ boxscore }) => {
  const { teams, officials } = boxscore
  return (
    <Stack gap={2}>
      <GamesTeamsStats teams={teams}/>
      <GamesPlayerStats teams={teams} />
      <GamesOfficials officials={officials} />
    </Stack>
  )
}

export default GamesStats