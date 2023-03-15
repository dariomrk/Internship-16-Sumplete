import React from 'react';
import './Cell.scoped.css';
import useNext from '../../hooks/useNext';

function Cell({ content, callback }) {
  const [current, next] = useNext(['', 'keep', 'delete']);

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
