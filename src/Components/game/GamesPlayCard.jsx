import { GiWhistle } from 'react-icons/gi'

const GamesPlayCard = ({ playData }) => {
  const { about, result } = playData
  const { ordinalNum } = about
  const { description, event } = result

  switch (event) {
    case 'Faceoff':
      // console.log(playData)
      return <h6>{event}</h6>  //keep
    case 'Shot':
      return <h6>{event}</h6> //keep
    case 'Takeaway':
      return <h6>{event}</h6> // keep
    case 'Missed Shot':
      return <h6>{event}</h6> // keep
    case 'Goal':
      return <h6>{event}</h6> // keep
    case 'Hit':
      return <h6>{event}</h6> // keep
    case 'Giveaway':
      return <h6>{event}</h6> // keep
    case 'Blocked Shot':
      return <h6>{event}</h6> // keep
    case 'Penalty':
      return <h6>{event}</h6> // keep
    case 'Stoppage':
      console.log(playData)
      return <h6 className='p-2 shadow rounded fw-bold' style={{backgroundColor: '#ececec'}}> <GiWhistle /> {description}</h6>
    case 'Period Start':
      return <h6 className='p-2 shadow rounded fw-bold' style={{backgroundColor: '#ececec'}}>{ordinalNum} {description}</h6>  
    case 'Period End':
      return <h6 className='p-2 shadow rounded fw-bold' style={{backgroundColor: '#ececec'}}>{description}</h6>
    case 'Game End':
      return <h6 className='p-2 shadow rounded fw-bold' style={{backgroundColor: '#ececec'}}>{description}</h6>
    case 'Game Official':
      return <h6 className='p-2 shadow rounded fw-bold' style={{backgroundColor: '#ececec'}}>{description}</h6>
    case 'Period Official':
      return null
    case 'Game Scheduled':
      return null  
    case 'Period Ready':
      return null 
    default: 
      return <h6>{event} missing</h6>
  }
}
                                
export default GamesPlayCard