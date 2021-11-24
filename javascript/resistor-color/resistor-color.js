//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = [
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
    ];

export const colorCode = (colorToFind) => {
  let colorCodeIndex = COLORS.indexOf(colorToFind)

  return colorCodeIndex != - 1 ? colorCodeIndex : null
};

const result = colorCode('white')

result

