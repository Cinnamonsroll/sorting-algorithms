function quickSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");

  if (array.length < 2) return array;

  const [head, ...tails] = array,
    left = [],
    equal = [],
    right = [];

  for (const element of tails)
    (element < head ? left : element > head ? right : equal).push(element);

  return [...quickSort(left), head, ...equal, ...quickSort(right)];
}
