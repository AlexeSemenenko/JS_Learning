const fib = n => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let i = prompt('Введите нужный вам номер числа Фибоначчи');

if (i != i * 1 || i < 0) {
    alert('Проверьте ввод данных');
} else {
    let num = fib(i);
    alert(`${i} число Фибоначчи = ${num}`);
}
