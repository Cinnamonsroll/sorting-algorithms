function bubbleSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");

  const len = array.length - 1;

  for (let i = 0; i < len; i++)
    if (array[i] > array[i + 1])
      [array[i], array[i + 1]] = [array[i + 1], array[i]];

  return (Math.min(...array) === array[0] && Math.max(...array) === array[len])
    ? array
    : bubbleSort(array);
}
