import Table from 'react-bootstrap/Table';

import StandingsHeaders from "./StandingsHeaders"
import StandingsBody from "./StandingsBody"

const StandingsDivisional = ({ records, conference  }) => {
  let stats = [
    'Rank',
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

  const divisions = records.map((record, i) => {
    const { division, teamRecords } = record
    const { name } = division
    if (conference === record.conference.name) {
      return (
        <Table bordered hover size="sm" key={name}>
          <thead>
            <StandingsHeaders stats={stats} nme={name}/>
          </thead>
          <StandingsBody stats={stats} teamRecords={teamRecords}/>
        </Table>
      )
    }
  })

  return (
    <div>
      {divisions}
    </div>
  )
}

export default StandingsDivisional