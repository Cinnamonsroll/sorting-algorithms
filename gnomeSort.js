function gnomeSort(array) {
  for (let i = 0; i < array.length; )
    if ((0 === i && i++, array[i] >= array[i - 1])) i++;
    else {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
      i--;
    }
  return array;
}
