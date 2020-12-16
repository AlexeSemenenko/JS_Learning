let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let numMonth = prompt('Введите номер месяца');
let numDay = prompt('Введите номер дня');

if (numMonth != numMonth * 1 || numDay != numDay * 1 || numMonth > 12 || numMonth < 1 || numDay < 1 || numDay > 31) {
    alert('Проверьте ввод данных');
} else if (numDay > month[numMonth - 1]){
    alert('Вы ошиблись с введенным днём');
} else {
    let days = 0;

    for (let i = 0; i < numMonth - 1; i++) {
        days += month[i];
    }

    days += numDay - 1;

    let shift;
    if (days > 7) {
        shift = days % 7;
    } else {
        shift = days;
    }

    if (shift > 3) {
        shift -= 3;
        alert(`В ваш день был(а) ${week[shift - 1]}`);
    } else {
        alert(`В ваш день был(а) ${week[3 + shift]}`);
    }
}