const range = (start, finish, step = 1) => {
    let array = [];
    if (isNaN(start) || isNaN(finish) || isNaN(step)) {
        return 'Проверьте тип введенных данных';
    } else if (step === 0){
        return 'Шаг не может равнять нулю';
    } else if (step >= 1 && start >= finish) {
        return 'Старт не может быть больше финиша при положительном шаге';
    } else if (step <= -1 && start <= finish) {
        return 'Старт не может быть меньше финиша при отрицательном шаге';
    } else {
        for (let i = 0; i <= Math.floor(Math.abs((start - finish) / step)); i++) {
            array[i] = start + step * i;
        }
        return array;
    }
}

alert(range("avd", 5));
alert(range(1, 5, -1));
alert(range(5, 1));
alert(range(1, 5));
alert(range(5, 1, -1));
