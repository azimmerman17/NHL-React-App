import { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';

import RemoveDuplicates from '../RemoveDuplicates';
import ToggleButtons from "../ToggleButtons"
import StandingsDivisional from './StandingsDivisional';
import StandingsWildCard from './StandingsWildCards';
import StandingsConference from './StandingConference';
import StandingsPlayoffs from './StandingsPlayoffs';
import StandingsLeague from './StandingsLeague';

const Standings = ({ data, setPath, setTitle }) => {
  const { records } = data
  const link ='api/v1/standings'
  const [radioNme, setRadioNme] = useState('Divisional')
  let conferences = []

  useEffect(() => {
    setTitle(`${radioNme} Standings`)
  },[radioNme])

  const radios = [
    { nme: 'Divisional' },
    { nme: 'Wild Card' },
    { nme: 'Conference' },
    {nme: 'League'},
    // { nme: 'Playoffs' },
  ];
  
  try {
    records.forEach(record => {
      const { name } = record.conference
      conferences.push(name)
    })
    RemoveDuplicates(conferences.sort())
  }
  catch (error) {
    console.log(error)
    setPath(link)
  }

  if(radioNme === 'League') {
    conferences = ['NHL']
  }



  const standings = conferences.map((conference, i) => {
    switch (radioNme) {
      case 'Divisional':
        return (
          <div key={`${conference}-Conference`} className='bg-white text-center p-2 shadow rounded'>
            <h3>{conference} Conference</h3>
              <StandingsDivisional records={records} conference={conference}/>
          </div>
        ) 
      case 'Wild Card':
        return (
          <div key={`${conference}-Conference`} className='bg-white text-center p-2 shadow rounded'>
            <h3>{conference} Conference</h3>
            <StandingsWildCard records={records} conference={conference}/>
          </div>
        ) 
      case 'Conference':
        return (
          <div key={`${conference}-Conference`} className='bg-white text-center p-2 shadow rounded'>
            <h3>{conference} Conference</h3>
            <StandingsConference records={records} conference={conference}/>
          </div>
        )
      case 'League':
        return (
          <div key={`${conference}`} className='bg-white text-center p-2 shadow rounded'>
            <StandingsLeague records={records} conference={conference}/>
          </div>
          )
        
      // case 'Playoffs':
      //   return (
      //     <div key={`${conference}-Conference`}>
      //       <h3>{conference}</h3>
      //       <StandingsPlayoffs records={records} conference={conference}/>
      //     </div>
      //   ) 
    }
  })

  return (
    <Stack gap={3} >
      <Stack className='bg-white text-center p-2 shadow rounded' gap={3} >
        <h2 >{`${radioNme} Standings`}</h2>
        <ToggleButtons radioNme={radioNme} setRadioNme={setRadioNme} radios={radios} /> 
      </Stack>
      {standings}
    </Stack>

  )
}

export default Standings