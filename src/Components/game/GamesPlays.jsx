import { useState } from "react"
import Stack from "react-bootstrap/Stack";

import ToggleButtons from "../ToggleButtons";
import GamesPeriodPlays from "./GamesPeriodPlays";


const GamesPlays = ({ plays }) => {
  const { playsByPeriod, currentPlay, allPlays } = plays
  const { about } = currentPlay
  const { ordinalNum } = about
  
  const [radioNme, setRadioNme] = useState(ordinalNum)

  let periodNames = [
    {nme: '1st'}, 
    {nme:'2nd'},
    {nme: '3rd'},
    {nme: 'OT'},
    {nme: 'SO'}
  ]

  const toggle = () => {
    let radios = []
    for (let i = 0; i < playsByPeriod.length; i++) {
      radios.push(periodNames[i])
    }
      return (
        <div>
          <ToggleButtons style={{width: '25%'}} className='align-right' radioNme={radioNme} setRadioNme={setRadioNme} radios={radios} /> 
        </div>
      )
  }

  return (
    <Stack gap={1} >
      {toggle()}
      <GamesPeriodPlays className='bg-white p-2 shadow rounded' allPlays={allPlays} playsByPeriod={playsByPeriod} radioNme={radioNme}/>
    </Stack>
  )
}

export default GamesPlays
