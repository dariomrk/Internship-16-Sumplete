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
 * sumStatesVertical: {value: number}[],
 * sumStatesHorizontal: {value: number}[],
 * callback: (id: string) => void}} props
 * @returns {JSX.Element}
 */
function Board({
  cellStates,
  sumStatesVertical,
  sumStatesHorizontal,
  callback,
}) {
  return (
    <div className="board">
      <div className="board-row">
        <div className="cells">
          {cellStates.map((row, i) => (
            <div
              className="cells-row"
              key={`cells-row-${i}`}
            >
              {row.map(({ value, state, id }) => (
                <Cell
                  value={value}
                  state={state}
                  id={id}
                  key={id}
                  callback={callback}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="cells-sum-horizontal">
          {sumStatesHorizontal.map(({ value }, i) => (
            <Cell
              value={value}
              state="disabled"
              key={`sum-horizontal-${i}`}
            />
          ))}
        </div>
      </div>
      <div className="cells-sum-vertical">
        {sumStatesVertical.map(({ value }, i) => (
          <Cell
            value={value}
            state="disabled"
            key={`sum-vertical-${i}`}
          />
        ))}
        <Cell state="disabled" />
      </div>
    </div>
  );
}

export default Board;
