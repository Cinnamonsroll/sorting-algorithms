function stoogeSort(array, start, end) {
  let pivot;
  if (end - start + 1 > 2) {
    pivot = ~~((end - start + 1) / 3);
    stoogeSort(array, start, end - pivot);
    stoogeSort(array, start + pivot, end);
    stoogeSort(array, start, end - pivot);
  }

  if (array[start] > array[end]) {
    [array[start], array[end]] = [array[end], array[start]];
  }
  return array
}
