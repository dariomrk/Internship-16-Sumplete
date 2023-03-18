import React, { useState } from 'react';
import Board from './components/Board/Board';
import {
  generateInitialCellStates, getVerticalSums, getHorizontalSums, getNextCellState,
} from './functions/game';

function App() {
  const [cellStates, setCellStates] = useState(generateInitialCellStates(3, 3));

  const handleCellStateUpdate = (id) => {
    const newCellStates = [...cellStates];
    newCellStates.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell.id === id) {
          const newCell = { ...cell, state: getNextCellState(cell.state) };
          newCellStates[i][j] = newCell;
        }
      });
    });
    setCellStates(newCellStates);
  };

  return (
    <Board
      cellStates={cellStates}
      sumsVertical={getVerticalSums(cellStates, false)
        .map((value, i) => ({ value, id: `vertical-${i}` }))}
      sumsHorizontal={getHorizontalSums(cellStates, false)
        .map((value, i) => ({ value, id: `horizontal-${i}` }))}
      callback={handleCellStateUpdate}
    />
  );
}

export default App;
