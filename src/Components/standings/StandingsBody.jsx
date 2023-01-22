import StandingsData from "./StandingsData"

const StandingsBody = ({ stats, teamRecords }) => {

  let teams = teamRecords.map(teamRecord => {
    const { id } = teamRecord.team
    return   (
        <StandingsData key={`team-${id}`} teamRecord={teamRecord} stats={stats}/>
    )
  })

  return (
    <tbody>
      {teams}
    </tbody>
  )
}

export default StandingsBody