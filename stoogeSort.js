function stoogeSort(array, start, end) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");
  if (!Number.isInteger(start))
    throw new TypeError("The 'start' argument must be an integer.");
  if (!Number.isInteger(end))
    throw new TypeError("The 'end' argument must be an integer.");

  let pivot;

  if (end - start + 1 > 2) {
    pivot = ~~((end - start + 1) / 3);
    stoogeSort(array, start, end - pivot);
    stoogeSort(array, start + pivot, end);
    stoogeSort(array, start, end - pivot);
  }

  if (array[start] > array[end])
    [array[start], array[end]] = [array[end], array[start]];

  return array
}
