function shellSort(array) {
  if (!Array.isArray(array))
    throw new TypeError("The 'array' argument must be an array.");
  const len = array.length;
  for (let gap = ~~(len / 2); gap > 0; gap = ~~(gap / 2)) {
    for (let i = gap; i < len; i += 1) {
      let temp = array[i];

      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;
    }
  }

  return array;
}
