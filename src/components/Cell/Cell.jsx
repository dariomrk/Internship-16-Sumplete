import React from 'react';
import './Cell.scoped.css';

function Cell({ content }) {
  return (
    <button type="button" className="delete">
      {content}
    </button>
  );
}

export default Cell;
