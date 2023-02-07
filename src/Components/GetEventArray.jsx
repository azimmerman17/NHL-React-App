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
    const { period } = about
    periods[period - 1].push(event)
  });

  return periods
}

export default GetEventArrey