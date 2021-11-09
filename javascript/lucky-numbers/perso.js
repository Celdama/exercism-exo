const errorMessage = (input) => {
  let message = ' '
  if (!input) {
    message = 'Required field';
  } else if (isNaN(Number(input)) || Number(input) === 0) {
    message = 'Must be a number besides 0';
  }

  return message
}

console.log(errorMessage('0'));
