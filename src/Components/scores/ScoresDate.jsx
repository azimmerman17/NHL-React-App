import findDate from "../findDate"

const ScoresDate = ({ date }) => {
  const offsets = [-1, 0, 1] 

  const dates = offsets.map((offset) => {
    if (offset === 0) {
      return <h4 className='pe-5 m-0' key={offset}>{findDate(date, offset)}</h4>
    }
    return <p className='pe-5 m-0' key={offset}>{findDate(date, offset)}</p>
  })
  return (
    <div className='d-flex justify-content-center' >
      {dates}
    </div>

  )
}

export default ScoresDate