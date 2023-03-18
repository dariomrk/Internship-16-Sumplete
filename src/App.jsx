import React from 'react';
import Board from './components/Board/Board';

function App() {
  const cellState = [
    [
      { content: 1, state: '', key: crypto.randomUUID() },
      { content: 2, state: '', key: crypto.randomUUID() },
      { content: 3, state: '', key: crypto.randomUUID() },
    ],
    [
      { content: 4, state: '', key: crypto.randomUUID() },
      { content: 5, state: '', key: crypto.randomUUID() },
      { content: 6, state: '', key: crypto.randomUUID() },
    ],
    [
      { content: 7, state: '', key: crypto.randomUUID() },
      { content: 8, state: '', key: crypto.randomUUID() },
      { content: 9, state: '', key: crypto.randomUUID() },
    ],
  ];

  return (
    <Board cells={cellState} callback={(id) => console.log(id)} />
  );
}

export default App;
