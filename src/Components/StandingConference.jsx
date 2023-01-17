import Table from 'react-bootstrap/Table';

import StandingsHeaders from "./StandingsHeaders"
import StandingsBody from "./StandingsBody"

const StandingsConference = ({ records, conference }) => {
  let conferenceTeams = []
    records.forEach((record) => {
      const { teamRecords } = record
      const { name } = record.conference
      if (conference === name) {
        for (let i = 0; i < teamRecords.length; i++) {
          const { conferenceRank } = teamRecords[i]
          conferenceTeams[Number(conferenceRank) - 1] = teamRecords[i]
        }
      }
    })

  let statsCon = [
    'Rank-Con',
    'Team',
    'G',
    'W',
    'L',
    'OT',
    'PTS',
    'P%',
    'ROW',
    'GF',
    'GA',
    'Diff',
    'Streak',
  ]

  return (
    <Table bordered hover size="sm" key={conference}>
      <thead>
        <StandingsHeaders stats={statsCon} nme={conference}/>
      </thead>
      <StandingsBody stats={statsCon} teamRecords={conferenceTeams}/>
    </Table>
  )
}

export default StandingsConference