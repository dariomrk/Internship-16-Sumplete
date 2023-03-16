/* eslint-disable max-len */
import { useState } from 'react';

/**
 * Enables infinite iteration through a collection of values, allowing you to easily cycle through them.
 * Returns an array containing the current value, a `next` function to iterate to the next value, and a `rotateTo` function
 * to rotate the collection so that a specific value becomes the first element.
 *
 * @param {Array<any>} values - An array of values to iterate through.
 *
 * @returns {Array} An array containing:
 *   - The current value.
 *   - A `next` function that can be called to iterate to the next value in the collection.
 *                 When called, it returns the next value.
 *   - A `rotateTo` function that takes a value as its argument and rotates the collection so that the given value
 *                 becomes the first element.
 *
 * @example
 * const colors = ['red', 'green', 'blue'];
 * const [currentColor, nextColor, rotateToColor] = useInfiniteIterator(colors);
 *
 * // Get the current color and the next color
 * console.log(currentColor); // 'red'
 * console.log(nextColor()); // 'green'
 *
 * // Rotate to the 'blue' color and get the next two colors
 * rotateToColor('blue');
 * console.log(nextColor()); // 'red'
 * console.log(nextColor()); // 'green'
 */
export default (values) => {
  const [array, setArray] = useState(values);

  const next = () => {
    setArray([...array.slice(1), array[0]]);
    return array[1];
  };

  const rotateTo = (value) => {
    const index = array.indexOf(value);
    if (index >= 0) {
      setArray([...array.slice(index), ...array.slice(0, index)]);
    }
  };

  return ([
    array[0],
    next,
    rotateTo,
  ]
  );
};
