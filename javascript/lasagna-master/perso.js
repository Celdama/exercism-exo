const cookingStatus = (remainingTime) => {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  } else if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else {
    return 'Not done, please wait.'
  }
}

// console.log(cookingStatus(12))

const preparationTime = (layers, timePerLayer = 2) => {
  return layers.length * timePerLayer
}


const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
// console.log(preparationTime(layers))

const quantities = (layers) => {
  const sum = {
    noodles: 0,
    sauce: 0
  }

  for (let i = 0; i < layers.length; i++) {
    console.log(layers[i])
    if (layers[i] === 'noodles') {
      sum.noodles += 50
    } else if (layers[i] === 'sauce') {
      sum.sauce += 0.2
    }
  }

  return sum
}

// console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']))

const addSecretIngredient = (friendsList, myList) => {
  const secretIngredient = friendsList.pop()
  myList.push(secretIngredient)
}

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];
// addSecretIngredient(friendsList, myList);

const scaleRecipe = (recipe, portions) => {
  const scaledRecipe = { ...recipe }

  for (const key in scaledRecipe) {
    scaledRecipe[key] = scaledRecipe[key] * portions / 2
  }

  return scaledRecipe;
}

const recipe = {
  sauce: 0.5,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};

console.log(scaleRecipe(recipe, 6))
