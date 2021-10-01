function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }

    }
    if (Math.min(...array) === array[0] && Math.max(...array) === array[array.length - 1]) return array
    else return bubbleSort(array)
}
