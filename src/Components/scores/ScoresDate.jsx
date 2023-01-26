import findDate from "../findDate"

const ScoresDate = ({ date }) => {
  const offsets = [0] 

  const dates = offsets.map((offset) => {
    if (offset === 0) {
      return <h4 className='px-5 m-0' key={offset}>{findDate(date, offset)}</h4>
    }
    return <p className='px-5 m-0' key={offset}>{findDate(date, offset)}</p>
  })
  return (
    <div className='d-flex justify-content-center' >
      {dates}
    </div>

  )
}

export default ScoresDate