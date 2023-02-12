const GetEventArrey = (allPlays, eventPlays) => {
  let periods = [
    [],   // 1st
    [],   // 2nd
    [],   // 3rd
    [],   // OT
  ]

  eventPlays.forEach(eventPlay => {
    const event = allPlays[eventPlay]
    const { about } = event
    const { period, ordinalNum } = about
    if (ordinalNum !== 'SO') {
      periods[period - 1].push(event)
    }
  });

  return periods
}

export default GetEventArrey