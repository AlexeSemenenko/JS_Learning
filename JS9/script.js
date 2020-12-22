const comparator = (a, b) => a > b;

const sort = (array, comparator) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (comparator(array[j], array[j + 1])) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
            }
        }
    }
    return array;
}

let arr = [1, 5, -1, 10, 11, 3, 2, 0];
arr = sort(arr, comparator);
alert(arr);