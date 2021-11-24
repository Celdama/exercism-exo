//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
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

  return Number(value)
};
