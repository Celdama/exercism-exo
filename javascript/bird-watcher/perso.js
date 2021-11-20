function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
  }
  return birdsPerDay
}

birdsPerDay = [2, 5, 0, 7, 4, 1];

console.log(fixBirdCountLog(birdsPerDay));