[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)

# Pancake Sort

There is an abstract data type (ADT) called a _pancake array_, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a _single_
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

## Function Analysis

The pancake sort algorithm works by iteratively finding the **maximum** element in the unsorted portion of the array and bringing it to its correct position at the end of the unsorted portion using the `flip()` operation. This process is repeated until the entire array is sorted.

The outer loop will iterate a total of $n - 1$ iterations giving us a time complexity of $\Theta(n)$.
For each iteration we then perform a linear search of the unsorted subarray. This means we have another asymptotic analysis of $\Theta(n)$.

The reversing operation is also linear as we perform multiple linear operations inside that function.
The `[...revseredSection, ...restOfArray]` uses the spread operator which will create a new array and perform a iteration of the elements that are told to spread. This is a linear operation which we do 2 times. We also call `slice()` and `reverse()` which are more linear operation functions in javascript.

However sice we dont count lower order terms this means our time complexity of the `flip()` method is only $\Theta(n)$.

And since we call this method a constant number of times (eg 1 or 2) inside our inner loop, the inner loop's time complexity remains $\Theta(n)$. Therfore the overall time complexity of our `pancakeSort()` is $\Theta(n^2)$.

**Total Number of Flips**

The flip function will always once or twice for each outer loop iteration. This means we expect the total number of flips to be $\Theta(n)$ as the outer loop will run for $n - 1 $ times.
