import React from 'react';
import './Button.scoped.css';

function Button({ content, type, callback }) {
  return (
    <button type="button" className={type} onClick={callback}>
      {content}
    </button>
  );
}

export default Button;
