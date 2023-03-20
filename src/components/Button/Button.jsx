import React from 'react';
import './Button.scoped.css';

function Button({
  content, type, callback, disabled,
}) {
  return (
    <button type="button" className={type} onClick={callback} disabled={disabled}>
      {content}
    </button>
  );
}

export default Button;
