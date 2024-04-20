/**
 * // Creates a copy of the array with the flip performed.
 * @param {number[]} array
 * @param {number} n
 * @returns {number[]}
 */
function flip(array, n) {
  // [...revseredSection, ...restOfArray]
  return [...array.slice(0, n).reverse(), ...array.slice(n)];
}

// Use only flip() here to manipulate the array
/**
 * @param {number[]} array
 * @returns {number[]}
 */
function pancakeSort(array) {
  const n = array.length;

  // represent the unsorted portion of the array
  for (let i = n; i > 1; i--) {
    // Store the max index which represents the highest value in the subarray
    let maxIndex = 0;

    // Find the highest value in unsorted arr and assign it's index
    // This is a linear search for the largest element
    for (let j = 1; j < i; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }

    // If the maximum value is not at the end
    if (maxIndex !== i - 1) {
      if (maxIndex !== 0) {
        array = flip(array, maxIndex + 1); // +1
      }

      array = flip(array, i); // +1
    }
  }

  return array;
}
