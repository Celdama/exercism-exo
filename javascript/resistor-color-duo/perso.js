const decodedValue = (array) => {
  const colors = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
  ]

  const [firstValue, secondValue] = [...array]

  const decodedFirstIndex = String(colors.indexOf(firstValue))
  const decodedSecondIndex = String(colors.indexOf(secondValue))

  const value = decodedFirstIndex + decodedSecondIndex

  return value
}

const result = decodedValue(['blue', 'grey'])

result