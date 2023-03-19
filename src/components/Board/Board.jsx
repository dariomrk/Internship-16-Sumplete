/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Board.scoped.css';
import Cell from '../Cell';
import SumCells from '../SumCells';

/**
 * @param {{
 * cellStates: {
 *  value: number,
 *  state: 'keep' | 'delete' | undefined,
 *  id: string
 * }[][],
 * sumsVertical: {
 *  value: number,
 *  id: string,
 *  state: 'done' | undefined
 * }[],
 * sumsHorizontal: {
 *  value: number,
 *  id: string,
 *  state: 'done' | undefined
 * }[],
 * callback: (id: string) => void}} props
 * @returns {JSX.Element}
 */
function Board({
  cellStates,
  sumsVertical,
  sumsHorizontal,
  callback,
}) {
  return (
    <div className="board">
      <div className="board-row">
        <div className="cells">
          {cellStates.map((row, i) => (
            <div
              className="cells-row"
              key={`row-${i}`}
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
        <SumCells cells={sumsHorizontal} direction="column" />
      </div>
      <SumCells cells={sumsVertical} direction="row" />
    </div>
  );
}

export default Board;
