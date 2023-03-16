import React from 'react';
import './Cell.scoped.css';
import useInfiniteIterator from '../../hooks/useInfiniteIterator';

function Cell({ content, callback }) {
  const [current, next] = useInfiniteIterator(['', 'keep', 'delete']);

  return (
    <button
      type="button"
      className={current}
      onClick={() => {
        callback(next());
      }}
    >
      {content}
    </button>
  );
}

export default Cell;
