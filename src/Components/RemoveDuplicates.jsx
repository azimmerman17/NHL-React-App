// must be a sorted arrey
const RemoveDuplicates = (arrey) => {
  for (let i = 0; i < arrey.length; i++) {
    if (arrey[i] === arrey[i + 1]) arrey.splice(i+ 1, 1)
  }
}

export default RemoveDuplicates