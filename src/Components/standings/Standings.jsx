import { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';

import RemoveDuplicates from '../RemoveDuplicates';
import StandingsButton from "./StandingsButtons"
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
          <div key={`${conference}-Conference`}>
            <h3>{conference} Conference</h3>
              <StandingsDivisional records={records} conference={conference}/>
          </div>
        ) 
      case 'Wild Card':
        return (
          <div key={`${conference}-Conference`}>
            <h3>{conference} Conference</h3>
            <StandingsWildCard records={records} conference={conference}/>
          </div>
        ) 
      case 'Conference':
        return (
          <div key={`${conference}-Conference`}>
            <h3>{conference} Conference</h3>
            <StandingsConference records={records} conference={conference}/>
          </div>
        )
      case 'League':
        return (
          <div key={`${conference}`}>
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
    <Stack gap={3}>
      <h2>{`${radioNme} Standings`}</h2>
      <StandingsButton radioNme={radioNme} setRadioNme={setRadioNme}/> 
      {standings}
    </Stack>

  )
}

export default Standings