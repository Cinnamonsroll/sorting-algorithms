function pancakeSort(array) {
  if (array.length < 2) return array;
  let mi = 0;
  for (let i = 0; i < array.length; i++) {
    mi = array[i] < array[mi] ? i : mi;
  }
  let pancakeStack = array.slice(mi),
    flip = (a, i) =>
      a
        .slice(0, i + 1)
        .reverse()
        .concat(a.slice(i + 1));
  pancakeStack = flip(pancakeStack, pancakeStack.length - 1);
  let newArray = array.slice(0, mi).concat(pancakeStack);
  newArray = flip(newArray, newArray.length - 1);
  return [newArray[0], ...pancakeSort(newArray.slice(1))];
}
