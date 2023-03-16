import React from 'react';
import './Cell.scoped.css';

/**
 * @param {{
 * content: string,
 * identifier: any,
 * state: undefined | 'keep' | 'delete' | 'disabled',
 * callback: (identifier: any) => void
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
        callback(identifier);
      }}
    >
      {content}
    </button>
  );
}

export default Cell;
