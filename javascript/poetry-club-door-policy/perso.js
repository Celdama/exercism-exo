function frontDoorResponse(line) {
  return line[0]
}


function frontDoorPassword(word) {
  return frontDoorResponse(word).toUpperCase() + word.slice(1, word.length).toLowerCase()
}

// console.log(frontDoorResponse('test'))


function backDoorResponse(line) {
  return line.trim().slice(-1)
}

function backDoorPassword(word) {
  return `${frontDoorPassword(word)}, please`
}

console.log(backDoorPassword('horse'))
