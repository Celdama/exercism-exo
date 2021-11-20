function cardTypeCheck(stack, card) {
  let numberOfCardInStack = 0
  stack.forEach(item => {
    if (item === card) {
      numberOfCardInStack += 1;
    }
  })

  return numberOfCardInStack
}

console.log(cardTypeCheck([1, 2, 3, 4], 3))