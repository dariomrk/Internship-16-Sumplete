import React from 'react';
import './Board.scoped.css';
import Cell from '../Cell';

function Board({ }) {
  return (
    <div className="board">
      <div className="column-sums">
        <Cell content={1} state="disabled" />
        <Cell content={2} state="disabled" />
        <Cell content={3} state="disabled" />
      </div>
      <div className="row-sums">
        <Cell content={4} state="disabled" />
        <Cell content={5} state="disabled" />
        <Cell content={6} state="disabled" />
      </div>
      <div className="playable">
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
        <Cell content={-1} />
      </div>
    </div>
  );
}

export default Board;
