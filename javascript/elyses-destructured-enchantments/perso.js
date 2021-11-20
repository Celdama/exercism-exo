function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...everythingElse] = deck
  return [secondCard, firstCard, ...everythingElse]
}
const deck = [5, 4, 6, 7, 2]

console.log(swapTopTwoCards(deck))