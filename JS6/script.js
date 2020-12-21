const checkNumber = value => {
    return typeof value === 'number';
}

let sum = num => {
    return 2020 + num;
}

function multiplication () {
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
        res *= arguments[i];
    }

    return res;
}

function typeCheck (f, checks) {
    return function () {
        for (let i = 0; i < arguments.length; i++) {
            if (!checks(arguments[i])) {
                alert('Некорректный тип аргумента');
                return;
            }
        }
        return f.apply(this, arguments);
    }
}

sum = typeCheck(sum, checkNumber);

alert(sum(5));
sum(null);
sum("abc");


multiplication = typeCheck(multiplication, checkNumber);

alert(multiplication(1, 2, 3, 4, 5));
multiplication(null);
multiplication("abc");
