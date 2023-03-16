import React from 'react';
import './Board.scoped.css';
import Cell from '../Cell';

function Board({ }) {
  return (
    <div className="board">
      <div className="column-sums">
        <Cell content={1} disabled="true" />
        <Cell content={2} disabled="true" />
        <Cell content={3} disabled="true" />
      </div>
      <div className="row-sums">
        <Cell content={4} disabled="true" />
        <Cell content={5} disabled="true" />
        <Cell content={6} disabled="true" />
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
