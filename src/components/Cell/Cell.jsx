import React from 'react';
import './Cell.scoped.css';

/**
 * @param {{
 * value: string | number | undefined,
 * id: string | undefined,
 * state: undefined | 'keep' | 'delete' | 'done',
 * disabled: boolean | undefined,
 * callback: (id: string) => void
 * }} props
 * @returns {JSX.Element}
 */
function Cell({
  value,
  id,
  state,
  disabled,
  callback,
}) {
  return (
    <button
      type="button"
      className={`${state} ${(disabled ? 'disabled' : '')}`}
      onClick={() => {
        if (!disabled) { callback(id); }
      }}
      disabled={disabled ?? false}
    >
      {value}
    </button>
  );
}

export default Cell;
