function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}
