import React, { useEffect, useState } from 'react';
import Board from '../Board';
import Button from '../Button';
import {
  getVerticalSums,
  getHorizontalSums,
  getNextCellState,
  setupCells,
} from '../../functions/game';
import './Game.scoped.css';

function Game() {
  const [config, setConfig] = useState({
    rows: 4,
    columns: 4,
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

  const modifyDifficulty = (amount) => {
    setConfig((current) => ({
      ...current,
      rows: current.rows + amount,
      columns: current.columns + amount,
    }));
  };

  useEffect(() => {
    setCellStates(setupCells(config));
  }, [config]);

  return (
    <>
      <Board
        cellStates={cellStates}
        sumsVertical={getVerticalSums(cellStates)}
        sumsHorizontal={getHorizontalSums(cellStates)}
        cellClickedCallback={handleCellStateUpdate}
        levelDoneCallback={() => {}}
      />
      <div className="game-controls">
        <Button
          content="+ Difficulty"
          callback={() => modifyDifficulty(1)}
          disabled={(config.columns >= 10 || config.rows >= 10)}
        />
        <Button
          content="- Difficulty"
          callback={() => modifyDifficulty(-1)}
          disabled={(config.columns <= 2 || config.rows <= 2)}
        />
        <Button content="Restart" />
        <Button content="New game" type="danger" />
      </div>
    </>
  );
}

export default Game;
