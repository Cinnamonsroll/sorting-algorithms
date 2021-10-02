function selectionSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");

  const len = array.length;

  for (let i = 0; i < len - 1; i++)
    for (let j = i + 1; j < len; j++)
      if (array[j] < array[i])
        [array[i], array[j]] = [array[j], array[i]];

  return array;
}
