const createMatrix = (rows, columns) => {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return matrix;
}

const sumMatrix = (first, second) => {
    if (first.length !== second.length || first[0].length !== second[0].length) {
        return false;
    } else {
        let sum = [];
        for (let i = 0; i < first.length; i++) {
            sum[i] = [];
            for (let j = 0; j < first[0].length; j++) {
                sum[i][j] = first[i][j] + second[i][j];
            }
        }

        return sum;
    }
}

const printMatrix = matrix => {
    let strMatrix = '';
    for (let i = 0; i < matrix.length; i++) {
        strMatrix = strMatrix.concat(matrix[i] + '\n');
    }
    return strMatrix;
}

const matrix1 = createMatrix(3, 3);
const matrix2 = createMatrix(3, 3);
const sum = sumMatrix(matrix1, matrix2);

alert(printMatrix(matrix1));
alert(printMatrix(matrix2));

if (sum) {
    alert(printMatrix(sum));
} else {
    alert("Неправильные размеры матриц");
}
