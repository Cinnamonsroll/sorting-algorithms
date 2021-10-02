function oddEvenSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");

  let isSorted = false;

  while (!isSorted) {
    isSorted = bubbleSort(array, 1, array.length - 2);
    isSorted = bubbleSort(array, 0, array.length - 2);
  }

  return array;
}

function bubbleSort(a, s, e) {
  let isSorted = true;

  for (let i = s; i <= e; i += 2)
    if (a[i] > a[i + 1]) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]];
      isSorted = false;
    }

  return isSorted;
}
