import Stack from "react-bootstrap/Stack"
import GamesPlayEvents from "./GamesPlayEvents"

const GamesPeriodPlays = ({ allPlays, playsByPeriod, radioNme }) => {
  let index
  
  switch (radioNme) {
    case '1st':
      index = 0
      break
    case '2nd':
      index = 1
      break
    case'3rd':
      index = 2
      break
    case 'OT':
      index = 3
      break
    case 'SO':
      index = 4
      break
    default: 
      index = 0
      break
  }
  const { plays } = playsByPeriod[index]

  const playlist = plays.map(play => {
    const playData = allPlays[play]
    const { result } = playData
    const { eventCode } = result


    return (
        <GamesPlayEvents key={eventCode} playData={playData} />
    )
  })

  return (
    <Stack gap={1} className='bg-white shadow rounded'>
      {playlist}
    </Stack>
  )
}

export default GamesPeriodPlays