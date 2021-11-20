// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = ''
  let sum2 = ''
  for (let i = 0; i < array1.length; i++) {
    sum1 += String(array1[i])
  }
  for (let i = 0; i < array2.length; i++) {
    sum2 += String(array2[i])
  }
  return Number(sum1) + Number(sum2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedNumber = Number(String(value).split('').reverse().join(''))
  if (reversedNumber === value) {
    return true
  } else {
    return false
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let message = ''
  if (!input) {
    message = 'Required field';
  } else if (isNaN(Number(input)) || Number(input) === 0) {
    message = 'Must be a number besides 0';
  }

  return message
}
