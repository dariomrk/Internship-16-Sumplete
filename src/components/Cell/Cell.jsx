import React from 'react';
import './Cell.scoped.css';

/**
 * @param {{
 * content: string,
 * id: string,
 * state: undefined | 'keep' | 'delete' | 'disabled',
 * callback: (id: string) => void
 * }} props
 * @returns {JSX.Element}
 */
function Cell({
  content, id, state, callback,
}) {
  return (
    <button
      type="button"
      className={state}
      onClick={() => {
        if (state !== 'disabled') { callback(id); }
      }}
    >
      {content}
    </button>
  );
}

export default Cell;
