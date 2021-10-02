function pancakeSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");

  if (array.length < 2) return array;

  const len = array.length;
  let mi = 0;

  for (let i = 0; i < len; i++)
    mi = array[i] < array[mi] ? i : mi;

  let pancakeStack = array.slice(mi);
  pancakeStack = flip(pancakeStack, pancakeStack.length - 1);

  let newArray = array.slice(0, mi).concat(pancakeStack);
  newArray = flip(newArray, newArray.length - 1);

  return [newArray[0], ...pancakeSort(newArray.slice(1))];
}

function flip(a, i) {
  return a
    .slice(0, i + 1)
    .reverse()
    .concat(a.slice(i + 1));
}
