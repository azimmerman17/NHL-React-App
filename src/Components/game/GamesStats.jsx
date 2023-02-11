import Stack from "react-bootstrap/Stack"
import GamesPlayerStats from "./GamePlayerStats"
import GamesTeamsStats from "./GamesTeamStats"

const GamesStats = ({ boxscore }) => {
  const { teams } = boxscore
  // console.log(boxscore)
  return (
    <Stack gap={2}>
      <GamesTeamsStats teams={teams}/>
      <GamesPlayerStats teams={teams} />
      <p>additional info</p>
      <p>coaches, officals, scraches</p>
    </Stack>
  )
}

export default GamesStats