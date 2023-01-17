const StandingsHeaders = ({ stats, nme }) => {
  const headers = stats.map((stat, i) => {
    if (i === 0) return <th colSpan='2' key={`${nme}-${stat}-head`} className='standings-table'>{nme}</th>
    else if (i === 1) {
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