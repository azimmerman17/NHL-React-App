import Button from "react-bootstrap/Button"
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl'


import findDate from "../findDate"

const ScoresDate = ({ date }) => {
  const offsets = [-1, 0, 1] 

  const setDate  = (offset) => {
    let currDate = new Date(date)
    let newDate = `${currDate.getUTCFullYear()}-${currDate.getUTCMonth() + 1}-${currDate.getUTCDate() + offset}`
    return newDate
    
  }

  const dates = offsets.map((offset) => {
    if (offset === 0) {
      return <h4 className='px-5 m-0' key={offset}>{findDate(date, offset)}</h4>
    }
return <Button href={`${setDate(offset)}`} className='px-5 m-0' variant='secondary' key={offset}>{offset > 0 ? <SlArrowRight /> : <SlArrowLeft />}</Button>
  })

  return (
    <div className='d-flex justify-content-center' >
      {dates}
    </div>

  )
}

export default ScoresDate