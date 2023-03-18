/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Board.scoped.css';
import Cell from '../Cell';

/**
 * @param {{
 * cells: {
 *  content: number,
 *  state: string,
 *  key: string
 * }[][],
 * callback: (id: string) => void}} props
 * @returns {JSX.Element}
 */
function Board({ cells, callback }) {
  // #region component logic
  const columSumValues = () => cells.reduce((acc, row) => {
    row.forEach((cell, index) => {
      acc[index] += cell.content;
    });
    return acc;
  }, Array.from({ length: cells[0].length }, () => 0));

  const rowSumValues = () => cells.map((row) => row
    .reduce((acc, cell) => acc + cell.content, 0));
  // #endregion
  return (
    <div className="board">
      <div className="column-sums">
        {columSumValues().map((content, i) => (
          <Cell
            content={content}
            state="disabled"
            key={`colum-sum-${i}`}
          />
        ))}
      </div>
      <div className="row-sums">
        {rowSumValues().map((content, i) => (
          <Cell
            content={content}
            state="disabled"
            key={`row-sum-${i}`}
          />
        ))}
      </div>
      <div className="playable">
        {cells.map((row, i) => (
          <React.Fragment key={`row-${i}`}>
            {row.map(({ content, state, key }) => (
              <Cell
                content={content}
                state={state}
                id={key}
                key={key}
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
