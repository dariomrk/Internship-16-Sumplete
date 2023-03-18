import React from 'react';
import Board from './components/Board/Board';

function App() {
  const cellStates = [
    [
      { value: 1, state: '', id: crypto.randomUUID() },
      { value: 2, state: '', id: crypto.randomUUID() },
      { value: 3, state: '', id: crypto.randomUUID() },
    ],
    [
      { value: 4, state: '', id: crypto.randomUUID() },
      { value: 5, state: '', id: crypto.randomUUID() },
      { value: 6, state: '', id: crypto.randomUUID() },
    ],
    [
      { value: 7, state: '', id: crypto.randomUUID() },
      { value: 8, state: '', id: crypto.randomUUID() },
      { value: 9, state: '', id: crypto.randomUUID() },
    ],
  ];
  const getVerticalSumStates = () => cellStates.reduce((acc, row) => {
    row.forEach((cell, index) => {
      acc[index] += cell.value;
    });
    return acc;
  }, Array.from({ length: cellStates[0].length }, () => 0))
    .map((value) => ({ value, id: crypto.randomUUID() }));

  const getHorizontalSumStates = () => cellStates.map((row) => row
    .reduce((acc, cell) => acc + cell.value, 0))
    .map((value) => ({ value, id: crypto.randomUUID() }));

  return (
    <Board
      cellStates={cellStates}
      sumsVertical={getVerticalSumStates()}
      sumsHorizontal={getHorizontalSumStates()}
      callback={(id) => console.log(id)}
    />
  );
}

export default App;
