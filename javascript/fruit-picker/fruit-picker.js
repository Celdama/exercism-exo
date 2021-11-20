/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { checkStatus, checkInventory } from './grocer';

/**
 * Returns the service status as a boolean value
 * @return {boolean}
 */
export function isServiceOnline() {
<<<<<<< HEAD
  const result = checkStatus((onlineStatus) => onlineStatus);

  return result === 'ONLINE' ? true : false;
=======
  let online = checkStatus((status) => status)

  return online === 'ONLINE' ? true : false
>>>>>>> 758baa92caebf1c0cc35db9f8f23a3e96840cf58
}

/**
 * Pick a fruit using the checkInventory API
 *
 * @param {string} variety
 * @param {number} quantity
 * @param {InventoryCallback} callback
 * @return {AvailabilityAction} the result from checkInventory
 */
<<<<<<< HEAD
export function pickFruit(variety, quantity, callback) {
  throw new Error('Implement the pickFruit function');
=======



// export const action = (err, data) => {
//   checkInventory(data, () => 'eee')
//   console.log(lastInventoryQuery)
// }


export function pickFruit(variety, quantity, callback) {
  const query = {
    variety,
    quantity
  }

  checkInventory(query, () => 'eee')
  return callback()

  // callback(query)
>>>>>>> 758baa92caebf1c0cc35db9f8f23a3e96840cf58
}

/**
 * This is a callback function to be passed to the checkInventory API
 * handles the next step once the inventory is known
 * @param {string | null} err
 * @param {boolean | undefined} isAvailable
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function purchaseInventoryIfAvailable(err, isAvailable) {
<<<<<<< HEAD
  throw new Error('Implement the purchaseInventoryIfAvailable function');
=======

  if (err !== null) {
    throw new Error;
  } else {
    return isAvailable === true ? 'PURCHASE' : 'NOOP'
  }
>>>>>>> 758baa92caebf1c0cc35db9f8f23a3e96840cf58
}

/**
 * Pick a fruit, and if it is available, purchase it
 *
 * @param {string} variety
 * @param {number} quantity
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function pickAndPurchaseFruit(variety, quantity) {
<<<<<<< HEAD
  throw new Error('Implement the pickAndPurchaseFruit function');
=======
  // throw new Error('Implement the pickAndPurchaseFruit function');
  const query = {
    variety,
    quantity
  }

  const result = checkInventory(query, purchaseInventoryIfAvailable)
  return result
>>>>>>> 758baa92caebf1c0cc35db9f8f23a3e96840cf58
}
