import findDate from "../findDate"

const ScoresDate = ({ date, changeDateObj }) => {
  const offsets = [0] 

  const setDate  = (offset) => {
    let currDate = new Date(date)
    let newDate = `${currDate.getUTCFullYear()}-${currDate.getUTCMonth() + 1}-${currDate.getUTCDate() + offset}`
    changeDateObj(new Date(newDate))
    
  }

  const dates = offsets.map((offset) => {
    if (offset === 0) {
      return <h4 className='px-5 m-0' key={offset}>{findDate(date, offset)}</h4>
    }
    return <button onClick={(e) => setDate(offset)} className='px-5 m-0' key={offset}>{offset}</button>
  })

  return (
    <div className='d-flex justify-content-center' >
      {dates}
    </div>

  )
}

export default ScoresDate