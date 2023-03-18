/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Board.scoped.css';
import Cell from '../Cell';

/**
 * @param {{
 * cellStates: {
 *  value: number,
 *  state: string,
 *  id: string
 * }[][],
 * columnSumStates: {value: number}[],
 * rowSumStates: {value: number}[],
 * callback: (id: string) => void}} props
 * @returns {JSX.Element}
 */
function Board({
  cellStates,
  columnSumStates,
  rowSumStates,
  callback,
}) {
  return (
    <div className="board">
      <div className="column-sums">
        {columnSumStates.map(({ value }, i) => (
          <Cell
            value={value}
            state="disabled"
            key={`colum-sum-${i}`}
          />
        ))}
      </div>
      <div className="row-sums">
        {rowSumStates.map(({ value }, i) => (
          <Cell
            value={value}
            state="disabled"
            key={`row-sum-${i}`}
          />
        ))}
      </div>
      <div className="playable">
        {cellStates.map((row, i) => (
          <React.Fragment key={`row-${i}`}>
            {row.map(({ value, state, id }) => (
              <Cell
                value={value}
                state={state}
                id={id}
                key={id}
                callback={callback}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Board;
