const findDate = (date, offset) => {
  let newDate = new Date(date)
  newDate.setDate(newDate.getDate() + offset)
  console.log(newDate)
  let day = newDate.getUTCDay()
  let month = newDate.getUTCMonth()
  let dte = newDate.getUTCDate()

  switch (day) {
    case 0:
      day = 'SUNDAY'
      break
    case 1:
      day = 'MONDAY'
      break
    case 2:
      day = 'TUESDAY'
      break
    case 3:
      day = 'WEDNESDAY'
      break
    case 4:
      day = 'THURSDAY'
      break
    case 5:
      day = 'FRIDAY'
      break
    case 6:
    day = 'SATURDAY'
    break      
  }

  switch (month) {
    case 0: 
      month = "JAN";
      break;
    case 1: 
      month = "FEB";
      break;
    case 2: 
      month = "MAR";
      break;
    case 3: 
      month = "APR";
      break;
    case 4: 
      month = "MAY";
      break;
    case 5: 
      month = "JUN"; 
      break;
    case 6: 
      month = "JUL";
      break;
    case 7: 
      month = "AUG";
      break;
    case 8: 
      month = "SEP";
      break;
    case 9: 
      month = "OCT";
      break;
    case 10: 
      month = "NOV";
      break;
    case 11: 
      month = "DEC";
      break;
  }

  return `${day}, ${month} ${dte}`
}

export default findDate