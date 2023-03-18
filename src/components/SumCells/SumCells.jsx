import React from 'react';
import './SumCells.scoped.css';
import Cell from '../Cell';

/**
 * @param {{cells:
 * {
 *  value: string | number,
 *  id: string,
 * },
 *  direction: 'row' | 'column'
 * }} props
 * @returns {JSX.Element}
 */
function SumCells({ cells, direction }) {
  return (
    <div style={{ flexDirection: direction }}>
      {cells.map(({ value, id }) => (
        <Cell
          value={value}
          state="disabled"
          key={id}
        />
      ))}
    </div>
  );
}

export default SumCells;
