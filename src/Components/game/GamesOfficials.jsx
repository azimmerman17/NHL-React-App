import Stack from "react-bootstrap/Stack"

const GamesOfficials = ({ officials }) => {
  console.log(officials)
  let referees = []
  let linesmen = []

  officials.forEach(person => {
    const { officialType, official } = person
    const { fullName } = official
    if (officialType === 'Referee') {
      referees.push(fullName)
    } else if (officialType === 'Linesman') {
      linesmen.push(fullName)

    }
    console.log(referees)
  })

  return (
    <Stack gap={2} className='bg-white p-2 shadow rounded'>
      <h5>Officials</h5>
      <div>
        <h6>Referees</h6>
        <p className='px-5'>{referees.join(', ')}</p>
      </div>
      <div>
        <h6>Linesmen</h6>
        <p className='px-5'>{linesmen.join(', ')}</p>
      </div>
    </Stack>
  )
}

export default GamesOfficials