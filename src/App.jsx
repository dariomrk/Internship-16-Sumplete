import React, { useState } from 'react';
import Board from './components/Board/Board';
import {
  getVerticalSums,
  getHorizontalSums,
  getNextCellState,
  setupCells,
} from './functions/game';

function App() {
  const [config, setConfig] = useState({
    rows: 3,
    columns: 3,
    minValue: 1,
    maxValue: 10,
    minToDelete: 0.4,
    maxToDelete: 0.6,
  });
  const [cellStates, setCellStates] = useState(setupCells(config));

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
      sumsVertical={getVerticalSums(cellStates)}
      sumsHorizontal={getHorizontalSums(cellStates)}
      cellClickedCallback={handleCellStateUpdate}
      levelDoneCallback={() => {}}
    />
  );
}

export default App;
