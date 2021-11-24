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
  let colorCodeIndex = null;

  COLORS.forEach((color, index) => {
    if (color === colorToFind.toLowerCase()) {
      colorCodeIndex = index
    }
  })

  return colorCodeIndex
};

const result = colorCode('black')

result

