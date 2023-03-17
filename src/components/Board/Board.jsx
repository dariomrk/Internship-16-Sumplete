/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Board.scoped.css';
import Cell from '../Cell';

/**
 * @param {{cells: {content: number, state: string}[][]}} props
 * @returns {JSX.Element}
 */
function Board({ cells }) {
  const columSumValues = () => cells.reduce((acc, row) => {
    row.forEach((cell, index) => {
      acc[index] += cell.content;
    });
    return acc;
  }, Array.from({ length: cells[0].length }, () => 0));

  const rowSumValues = () => cells.map((row) => row
    .reduce((acc, cell) => acc + cell.content, 0));

  return (
    <div className="board">
      <div className="column-sums">
        {columSumValues().map((content, x) => (
          <Cell
            content={content}
            state="disabled"
            identifier={{ x, sumCell: true }}
            key={`col-sum-${x}`}
          />
        ))}
      </div>
      <div className="row-sums">
        {rowSumValues().map((content, y) => (
          <Cell
            content={content}
            state="disabled"
            identifier={{ y, sumCell: true }}
            key={`row-sum-${y}`}
          />
        ))}
      </div>
      <div className="playable">
        {cells.map((row, y) => (
          <React.Fragment key={`row-${y}`}>
            {row.map(({ content, state }, x) => (
              <Cell
                content={content}
                state={state}
                identifier={{ x, y, sumCell: false }}
                key={`cell-${x}-${y}`}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Board;
