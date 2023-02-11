const GamesTableRowData = ({ player, stat }) => {
  const {  jerseyNumber, person, stats, position } = player
  const { type } = position
  const  { skaterStats, goalieStats } = stats
  const { fullName } = person
  const { id } = person


  switch (stat) {
    //  shared
    case '#':
      return <td key={`${id}-${stat}`}>{jerseyNumber}</td>
    case 'pos':
      return <td key={`${id}-${stat}`}>{fullName}</td>
    case 'PIM':
      return <td key={`${id}-${stat}`}>{type === 'Goalie' ? goalieStats.penaltyMinutes : skaterStats.penaltyMinutes}</td>  
    case 'TOI':
      return <td key={`${id}-${stat}`}>{type === 'Goalie' ? goalieStats.timeOnIce : skaterStats.timeOnIce}</td>
    // skater only
    case 'G':
      return <td key={`${id}-${stat}`}>{skaterStats.goals}</td>
    case 'A':
      return <td key={`${id}-${stat}`}>{skaterStats.assists}</td>
    case 'P':
      return <td key={`${id}-${stat}`}>{skaterStats.goals + skaterStats.assists}</td>
    case '+/-':
      return <td key={`${id}-${stat}`}>{skaterStats.plusMinus}</td>
    case 'S':
      return <td key={`${id}-${stat}`}>{skaterStats.shots}</td>
    case 'H':
      return <td key={`${id}-${stat}`}>{skaterStats.hits}</td>
    case 'BLK':
      return <td key={`${id}-${stat}`}>{skaterStats.blocked}</td>
    case 'GVA':
      return <td key={`${id}-${stat}`}>{skaterStats.giveaways}</td>
    case 'TKA':
      return <td key={`${id}-${stat}`}>{skaterStats.takeaways}</td>
    case 'FO%':
      return <td key={`${id}-${stat}`}>{skaterStats.faceoffTaken > 0 ? `${skaterStats.faceOffPct}%` : '-'}</td>
    case 'PP TOI':
      return <td key={`${id}-${stat}`}>{skaterStats.powerPlayTimeOnIce}</td>
    case 'SH TOI':
      return <td key={`${id}-${stat}`}>{skaterStats.shortHandedTimeOnIce}</td>
    // goalie only
    case 'W/L':
      return <td key={`${id}-${stat}`}>{goalieStats.decision}</td>
    case 'EV':
      return <td key={`${id}-${stat}`}>{`${goalieStats.evenSaves} - ${goalieStats.evenShotsAgainst}`}</td>
    case 'PP':
      return <td key={`${id}-${stat}`}>{`${goalieStats.powerPlaySaves} - ${goalieStats.powerPlayShotsAgainst}`}</td>
    case 'SH':
      return <td key={`${id}-${stat}`}>{`${goalieStats.shortHandedSaves} - ${goalieStats.shortHandedShotsAgainst}`}</td>
    case 'TOTAL':
      return <td key={`${id}-${stat}`}>{`${goalieStats.saves} - ${goalieStats.shots}`}</td>
    case 'SV%':
      return <td key={`${id}-${stat}`}>{goalieStats.savePercentage}</td>
    default:
      return <td key={`${id}-${stat}`}>missing</td>
    }

}


export default GamesTableRowData