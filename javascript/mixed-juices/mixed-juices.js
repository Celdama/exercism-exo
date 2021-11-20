// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeToMix = null
  switch (name) {
    case 'Pure Strawberry Joy':
      timeToMix = 0.5;
      break;
    case 'Energizer':
      timeToMix = 1.5;
      break;
    case 'Green Garden':
      timeToMix = 1.5;
      break;
    case 'Tropical Island':
      timeToMix = 3;
      break;
    case 'All or Nothing':
      timeToMix = 5;
      break;
    default:
      timeToMix = 2.5;
      break;
  }

  return timeToMix
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) {
    return wedgesNeeded
  }

  let numberOfLimesToCut = 0;
  let sumOfWedges = 0;
  let index = 0


  do {
    if (index > limes.length) {
      numberOfLimesToCut = limes.length
      break
    } else {
      switch (limes[index]) {
      case 'small':
        sumOfWedges += 6
        break;
      case 'medium':
        sumOfWedges += 8
        break;
      case 'large':
        sumOfWedges += 10
        break;
    }
    index++
    numberOfLimesToCut++
    }
  } while (sumOfWedges < wedgesNeeded)

  return numberOfLimesToCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let remainingJuice = []


  for (let i = 0; i < orders.length; i++) {
    const timeNeeded =  timeToMixJuice(orders[i])

    if (timeLeft <= 0) {
      remainingJuice.push(orders[i])
    } else {
      timeLeft -= timeNeeded;
    }
  }

  return remainingJuice
}
