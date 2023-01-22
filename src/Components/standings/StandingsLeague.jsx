import Table from 'react-bootstrap/Table';

import StandingsHeaders from "./StandingsHeaders"
import StandingsBody from "./StandingsBody"

const StandingsLeague = ({ records, conference }) => {
  let leagueTeams = []
  records.forEach((record) => {
    const { teamRecords } = record
      for (let i = 0; i < teamRecords.length; i++) {
        const { leagueRank } = teamRecords[i]
        leagueTeams[Number(leagueRank) - 1] = teamRecords[i]
      }
  })

  let statsLge = [
    'Rank-Lge',
    'Team',
    'G',
    'W',
    'L',
    'OT',
    'PTS',
    'P%',
    'RW',
    'ROW',
    'GF',
    'GA',
    'DIFF',
    'STRK',
  ]

  return (
    <div>
      <Table bordered hover size="sm" key={conference}>
        <thead>
          <StandingsHeaders stats={statsLge} nme={conference} />
        </thead>
        <StandingsBody stats={statsLge} teamRecords={leagueTeams} />
      </Table>
    </div>
  )
}

export default StandingsLeague