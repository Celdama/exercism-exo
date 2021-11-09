// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBird = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBird += birdsPerDay[i];
  }

  return totalBird
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let dayInAWeek = 7
  let start = null;
  let end = null;
  let totalBird = 0

  if (week === 1) {
    start = 0
    end = start + 7
  } else {
    start = (dayInAWeek * week) - dayInAWeek
    end = dayInAWeek * week
  }

  for (let i = start; i < end; i++) {
    totalBird += birdsPerDay[i]
  }

  return totalBird
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
  }
  return birdsPerDay
}
