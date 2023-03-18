export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateCells = (rows, columns) => {
  const cellStates = [];
  for (let i = 1; i <= rows; i += 1) {
    const row = [];
    for (let j = 1; j <= columns; j += 1) {
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

export const getVerticalSums = (cellStates, checkIsKeepState) => cellStates.reduce((acc, row) => {
  row.forEach((cell, index) => {
    if (!checkIsKeepState) {
      if (!cell.toDelete) { acc[index] += cell.value; }
      return;
    }
    if (cell.state === 'keep') { acc[index] += cell.value; }
  });
  return acc;
}, Array.from({ length: cellStates[0].length }, () => 0));

export const getHorizontalSums = (cellStates, checkIsKeepState) => cellStates.map((row) => row
  .reduce((acc, cell) => {
    if (!checkIsKeepState) {
      if (!cell.toDelete) { return acc + cell.value; }
    } else if (cell.state === 'keep') { return acc + cell.value; }
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
