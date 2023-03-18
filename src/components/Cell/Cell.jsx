import React from 'react';
import './Cell.scoped.css';

/**
 * @param {{
 * value: string | number,
 * id: string,
 * state: undefined | 'keep' | 'delete' | 'disabled',
 * callback: (id: string) => void
 * }} props
 * @returns {JSX.Element}
 */
function Cell({
  value, id, state, callback,
}) {
  return (
    <button
      type="button"
      className={state}
      onClick={() => {
        if (state !== 'disabled') { callback(id); }
      }}
    >
      {value}
    </button>
  );
}

export default Cell;
