const StandingsData = ({ teamRecord, stats }) => {
  const data = stats.map((stat) => {
    const { divisionRank, team, gamesPlayed, leagueRecord, points, pointsPercentage, row, goalsScored, goalsAgainst, streak, wildCardRank, conferenceRank, leagueRank } = teamRecord
    const { name } = team
    const { wins, losses, ot } = leagueRecord
    const { streakCode } = streak

    switch (stat) {
      case  'Rank' :
        return <td key={`${name}-divisionRank`} className='standings-table'>{divisionRank}</td>
      case 'Rank-WC':
        return <td key={`${name}-wildCardRank`} className='standings-table'>{wildCardRank}</td>  
      case 'Rank-Con':
        return <td key={`${name}-conferenceRank`} className='standings-table'>{conferenceRank}</td>      
      case 'Rank-Lge':
        return <td key={`${name}-leagueRank`} className='standings-table'>{leagueRank}</td>      
      case 'Team' :
        return <th key={{name}} className='team-name standings-table'>{name}</th>
      case 'G' :
        return <td key={`${name}-gamesPlayed`} className='standings-table'>{gamesPlayed}</td>
      case 'W' :
        return <td key={`${name}-wins`} className='standings-table'>{wins}</td>
      case 'L' :
        return <td key={`${name}-losses`} className='standings-table'>{losses}</td>
      case 'OT' :
        return <td key={`${name}-ot`} className='standings-table'>{ot}</td>
      case 'PTS' :
        return <td key={`${name}-points`} className='standings-table'>{points}</td>
      case 'P%' :
        return <td key={`${name}-pointsPercentage`} className='standings-table'>{`${(pointsPercentage * 100).toFixed(2)}%`}</td>
      case 'ROW' :
        return <td key={`${name}-row`} className='standings-table'>{row}</td>
      case 'GF' :
        return <td key={`${name}-goalsScored`} className='standings-table'>{goalsScored}</td>
      case 'GA' :
        return <td key={`${name}-goalsAgainst`} className='standings-table'>{goalsAgainst}</td>
      case 'Diff' :
        return <td key={`${name}-diff`} className='standings-table'>{goalsScored - goalsAgainst}</td>
      case 'Streak' :
        return <td key={`${name}-streakCode`} className='standings-table'>{streakCode}</td>
      default:
        return <td key={`${team}-bad`} className='standings-table'>MISSING</td>
    }
  })
  return (
    <tr>
      {data}
    </tr>
  )
}

export default StandingsData