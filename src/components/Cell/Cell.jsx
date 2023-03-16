import React from 'react';
import './Cell.scoped.css';
import useInfiniteIterator from '../../hooks/useInfiniteIterator';

function Cell({ content, disabled, callback }) {
  const [current, next] = useInfiniteIterator(['', 'keep', 'delete']);

  return (
    <button
      type="button"
      disabled={disabled}
      className={(!disabled ? current : 'disabled')}
      onClick={() => {
        callback(next());
      }}
    >
      {content}
    </button>
  );
}

export default Cell;
