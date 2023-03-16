import React from 'react';
import Cell from './components/Cell';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Cell content="cell" />
      <Button content="button" />
      <Button content="button" type="success" />
      <Button content="button" type="danger" />
    </>
  );
}

export default App;
