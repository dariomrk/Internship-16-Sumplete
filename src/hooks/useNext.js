import { useState } from 'react';

/**
 * Enables easy infinite iteration through a collection.
 * Returns the current value and a `next` function to iterate to the next value from the collection.
 * When called the `next` function also returns the next value.
 * @param {Array<any>} values
 * @returns {[any, () => any]}
 */
export default (values) => {
  const [array, setArray] = useState(values);

  return (
    [array[0], () => {
      setArray([...array.slice(1), array[0]]);
      return array[1];
    }]
  );
};
