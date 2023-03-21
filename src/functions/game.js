export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateCells = (rows, columns) => {
  const cellStates = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < columns; j += 1) {
      row.push({
        value: 0,
        state: '',
        id: crypto.randomUUID(),
        toDelete: false,
      });
    }
    cellStates.push(row);
  }
  return cellStates;
};

export const getVerticalSums = (cellStates) => cellStates.reduce((acc, row) => {
  row.forEach((cell, index) => {
    acc[index].resultValue += (!cell.toDelete ? cell.value : 0);
    acc[index].currentValue += (cell.state !== 'delete' ? cell.value : 0);
  });
  return acc;
}, Array.from({ length: cellStates[0].length }, () => ({ resultValue: 0, currentValue: 0 })))
  .map(({ resultValue, currentValue }) => ({
    value: resultValue,
    state: (resultValue === currentValue ? 'done' : ''),
    id: crypto.randomUUID(),
  }));

export const getHorizontalSums = (cellStates) => cellStates.map((row) => row
  .reduce((acc, cell) => {
    const resultValue = acc.resultValue + (!cell.toDelete ? cell.value : 0);
    const currentValue = acc.currentValue + (cell.state !== 'delete' ? cell.value : 0);
    return { resultValue, currentValue };
  }, { resultValue: 0, currentValue: 0 }))
  .map(({ resultValue, currentValue }) => ({
    value: resultValue,
    state: (resultValue === currentValue ? 'done' : ''),
    id: crypto.randomUUID(),
  }));

export const getNextCellState = (currentValue) => {
  const states = ['', 'keep', 'delete'];
  const index = states.indexOf(currentValue);
  if (index === states.length - 1) {
    return states[0];
  }
  return states[index + 1];
};

export const setupCells = ({
  rows,
  columns,
  minValue,
  maxValue,
  minToDelete,
  maxToDelete,
}) => {
  const cells = generateCells(rows, columns);
  const flatCells = cells.flat();

  const totalCells = flatCells.length;
  const numToDelete = getRandomNumber(
    Math.round((minToDelete) * totalCells),
    Math.round((maxToDelete) * totalCells),
  );

  const indicesToDelete = new Set();
  while (indicesToDelete.size < numToDelete) {
    indicesToDelete.add(Math.floor(Math.random() * totalCells));
  }

  for (let i = 0; i < flatCells.length; i += 1) {
    flatCells[i].value = getRandomNumber(minValue, maxValue);

    if (indicesToDelete.has(i)) {
      flatCells[i].toDelete = true;
    }
  }

  const outputCells = [];
  for (let i = 0; i < cells.length; i += 1) {
    outputCells[i] = flatCells.slice(i * cells[i].length, (i + 1) * cells[i].length);
  }

  return outputCells;
};

export const resetCells = (cellStates) => {
  const outputCells = [];
  for (let i = 0; i < cellStates.length; i += 1) {
    const row = [];
    for (let j = 0; j < cellStates[i].length; j += 1) {
      row.push({ ...cellStates[i][j], state: '' });
    }
    outputCells.push(row);
  }
  return outputCells;
};
