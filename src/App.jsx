import React from 'react';
import Board from './components/Board/Board';

function App() {
  const cells = [
    [{ content: 1, state: '' }, { content: 2, state: '' }, { content: 3, state: '' }],
    [{ content: 4, state: '' }, { content: 5, state: '' }, { content: 6, state: '' }],
    [{ content: 7, state: '' }, { content: 8, state: '' }, { content: 9, state: '' }],
  ];

  return (
    <Board cells={cells} />
  );
}

export default App;
