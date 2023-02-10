const formatDate = (date) => {
  console.log(date)
  return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`
}

export default formatDate