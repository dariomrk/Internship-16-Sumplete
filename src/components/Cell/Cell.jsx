import React from 'react';
import './Cell.scoped.css';

/**
 * @param {{
 * content: string,
 * identifier: {x: number, y: number, sumCell: boolean},
 * state: undefined | 'keep' | 'delete' | 'disabled',
 * callback: (identifier: {x: number, y: number, sumCell: boolean}) => void
 * }} props
 * @returns {JSX.Element}
 */
function Cell({
  content, identifier, state, callback,
}) {
  return (
    <button
      type="button"
      className={state}
      onClick={() => {
        if (state !== 'disabled') { callback(identifier); }
      }}
    >
      {content}
    </button>
  );
}

export default Cell;
