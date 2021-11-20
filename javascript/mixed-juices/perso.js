function timeToMixJuice(name) {
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

const remainingOrders = (timeLeft, orders) => {
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


// remainingOrders(7, [
//       'Tropical Island',
//       'Energizer',
//       'Limetime',
//       'All or Nothing',
//       'Pure Strawberry Joy',
//     ]);


// remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])

// remainingOrders(12, [
//       'Energizer',
//       'Green Garden',
//       'Ruby Glow',
//       'Pure Strawberry Joy',
//       'Tropical Island',
//       'Limetime',
//     ])

const orders = ['Bananas Gone Wild', 'Pure Strawberry Joy'];
console.log(remainingOrders(0.2, orders))