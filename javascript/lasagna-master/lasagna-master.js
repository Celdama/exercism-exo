/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export const cookingStatus = (remainingTime) => {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  } else if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else {
    return 'Not done, please wait.'
  }
}

export const preparationTime = (layers, timePerLayer = 2) => {
  return layers.length * timePerLayer
}

export const quantities = (layers) => {
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

export const addSecretIngredient = (friendsList, myList) => {
  const secretIngredient = friendsList[friendsList.length - 1]
  myList.push(secretIngredient)
}


export const scaleRecipe = (recipe, portions) => {
  const scaledRecipe = { ...recipe }

  for (const key in scaledRecipe) {
    scaledRecipe[key] = scaledRecipe[key] * portions / 2
  }

  return scaledRecipe;
}