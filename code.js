/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number[]}
 */
function flip(array, n) {
  if (n > array.length) {
    n = array.length;
  }

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

  for (let i = n; i > 1; i--) {
    let maxIndex = 0;

    for (let j = 1; j < i; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i - 1) {
      if (maxIndex !== 0) {
        array = flip(array, maxIndex + 1);
      }

      array = flip(array, i);
    }
  }

  return array;
}
