import { GiWhistle } from 'react-icons/gi'
import GamesPlayCard from './GamesPlayCard'

const GamesPlayEvents = ({ playData }) => {
  const { about, result } = playData
  const { ordinalNum } = about
  const { description, event } = result

  switch (event) {
    case 'Faceoff':
      return <GamesPlayCard playData={playData} />
    case 'Shot':
      return <GamesPlayCard playData={playData} />
    case 'Takeaway':
      return <GamesPlayCard playData={playData} />
    case 'Missed Shot':
      return <GamesPlayCard playData={playData} />
    case 'Goal':
      return (
        <div>
          <h6 className='p-2 shadow rounded fw-bold text-white text-center' style={{backgroundColor: 'red'}}>{event}</h6>
          <GamesPlayCard playData={playData} />
        </div>
      )
    case 'Hit':
      return <GamesPlayCard playData={playData} />
    case 'Giveaway':
      return <GamesPlayCard playData={playData} />
    case 'Blocked Shot':
      return <GamesPlayCard playData={playData} />
    case 'Penalty':
      return (
        <div>
        <h6 className='p-2 shadow rounded fw-bold text-black text-center' style={{backgroundColor: 'yellow'}}>{event}</h6>
        <GamesPlayCard playData={playData} />
      </div>
      )
    case 'Stoppage':
      return <h6 className='p-2 shadow rounded fw-bold text-center' style={{backgroundColor: '#ececec'}}> <GiWhistle /> {description}</h6>
    case 'Period Start':
      return <h6 className='p-2 shadow rounded fw-bold text-center' style={{backgroundColor: '#ececec'}}>{ordinalNum} {description}</h6>  
    case 'Period End':
      return <h6 className='p-2 shadow rounded fw-bold text-center' style={{backgroundColor: '#7eca24'}}>{description}</h6>
    case 'Game End':
      return <h6 className='p-2 shadow rounded fw-bold text-center' style={{backgroundColor: '#ececec'}}>{description}</h6>
    case 'Game Official':
      return <h6 className='p-2 shadow rounded fw-bold text-center' style={{backgroundColor: '#ececec'}}>{description}</h6>
    case 'Period Official':
      return null
    case 'Game Scheduled':
      return null  
    case 'Period Ready':
      return null 
    default: 
      return <h6 className='bg-warning p-2 shadow rounded fw-bold'>{event} missing</h6>
  }
}
                                
export default GamesPlayEvents