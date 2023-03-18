import React from 'react';
import './SumCells.scoped.css';
import Cell from '../Cell';

/**
 * @param {{cells:{
 *  value: string | number,
 *  id: 'keep' | 'delete' | undefined,
 *  state: 'done' | undefined
 * },
 *  direction: 'row' | 'column'
 * }} props
 * @returns {JSX.Element}
 */
function SumCells({ cells, direction }) {
  return (
    <div style={{ flexDirection: direction }}>
      {cells.map(({ value, id, state }) => (
        <Cell
          value={value}
          state={state}
          key={id}
          disabled
        />
      ))}
    </div>
  );
}

export default SumCells;
