function gnomeSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");

  const len = array.length;

  for (let i = 0; i < len; /* void */) {
    if (i === 0) i++;

    if (array[i] >= array[i - 1]) i++;
    else {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];

      i--;
    }
  }

  return array;
}
