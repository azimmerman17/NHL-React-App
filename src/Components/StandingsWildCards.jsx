import Table from 'react-bootstrap/Table';

import StandingsHeaders from "./StandingsHeaders"
import StandingsBody from "./StandingsBody"

const StandingsWildCard = ({ records, conference }) => {
  let conferenceWildCard = []
  records.forEach((record) => {
    const { teamRecords } = record
    const { name } = record.conference
    if (conference === name) {
      for (let i = 0; i < teamRecords.length; i++) {
        const { wildCardRank } = teamRecords[i]
        if (wildCardRank !== '0' ) {
          conferenceWildCard[Number(wildCardRank) - 1] = teamRecords[i]
        }
      }
    }
  })

  let statsDiv = [
    'Rank',
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

  let statsWC = [
    'Rank-WC',
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

  const divisions = records.map((record) => {
    const { division, teamRecords } = record
    const { name } = division
    let top3Teams = []
    teamRecords.forEach(teamRecord => {
      const { wildCardRank } = teamRecord
      if ( wildCardRank === '0') {
        top3Teams.push(teamRecord)
      }
    })
    if (conference === record.conference.name) {
      return (
        <Table bordered hover size="sm" key={name}>
          <thead>
            <StandingsHeaders stats={statsDiv} nme={name}/>
          </thead>
          <StandingsBody stats={statsDiv} teamRecords={top3Teams}/>
        </Table>
      )
    }
  })

  return (
    <div>
      {divisions}
      <Table bordered hover size="sm" key={`${conference}-wildCard`}>
        <thead>
          <StandingsHeaders stats={statsWC} nme='Wild Card'/>
        </thead>
        <StandingsBody stats={statsWC} teamRecords={conferenceWildCard} />
      </Table>
    </div>
  )
}





  

export default StandingsWildCard