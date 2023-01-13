const StandingsHeaders = ({ stats, nme }) => {
  console.log(stats)
  const headers = stats.map(stat => {
    if (stat === 'Rank') return <th colSpan='2' key={`${nme}-${stat}-head`} className='standings-table'>{nme}</th>
    else if (stat === 'Team') {
      return 
    }
    else return <th key={`${stat}-head`} className='standings-table'>{stat}</th>
    
  })
  
  return (
    <tr>
      {headers}
    </tr>
  )
}

export default StandingsHeaders