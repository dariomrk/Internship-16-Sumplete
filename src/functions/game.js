export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateInitialCellStates = (rows, columns) => {
  const cellStates = [];
  for (let i = 1; i <= rows; i += 1) {
    const row = [];
    for (let j = 1; j <= columns; j += 1) {
      row.push({ value: (i - 1) * columns + j, state: '', id: crypto.randomUUID() });
    }
    cellStates.push(row);
  }
  return cellStates;
};

export const getVerticalSums = (cellStates, checkCellState) => cellStates.reduce((acc, row) => {
  row.forEach((cell, index) => {
    if (!checkCellState) {
      acc[index] += cell.value;
      return;
    }
    if (cell.state === 'keep') { acc[index] += cell.value; }
  });
  return acc;
}, Array.from({ length: cellStates[0].length }, () => 0));

export const getHorizontalSums = (cellStates, checkCellState) => cellStates.map((row) => row
  .reduce((acc, cell) => {
    if (!checkCellState) { return acc + cell.value; }
    if (cell.state === 'keep') { return acc + cell.value; }
    return acc;
  }, 0));

export const getNextCellState = (currentValue) => {
  const states = ['', 'keep', 'delete'];
  const index = states.indexOf(currentValue);
  if (index === states.length - 1) {
    return states[0];
  }
  return states[index + 1];
};
