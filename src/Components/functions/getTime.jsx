const getTime = (gameDate) => {
const date = new Date(gameDate)
let hours = date.getHours()
let minutes = date.getMinutes()
let amPM = hours >= 12 ? 'PM' : 'AM'
if (hours > 12) {
  hours -= 12
} else if (hours === 0) {
  hours = 12
}

if (minutes < 10) {
  minutes = `0${minutes}`
}

return `${hours}:${minutes} ${amPM}`
}

export default getTime