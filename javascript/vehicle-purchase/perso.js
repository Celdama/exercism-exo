function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.80
  } else if (age < 10) {
    return originalPrice * 0.70
  } else {
    return originalPrice * 0.50
  }
}

console.log(calculateResellPrice(1000, 5))