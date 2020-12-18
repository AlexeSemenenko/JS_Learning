let numOfStoreys = prompt('Введите количество этажей');
let numOfEntrances = prompt('Введите количество подъездов');
let numOfApartments = prompt('Введите количество квартир на этаже');
let apartment = prompt('Введите номер квартиры');

if (numOfStoreys != numOfStoreys * 1 || numOfEntrances != numOfEntrances * 1 ||
    numOfApartments != numOfApartments * 1 || apartment != apartment * 1) {
    alert('Что-то пошло не так, введите данные повторно');

} else if (!Number.isInteger(+numOfStoreys) ||!Number.isInteger(+numOfEntrances) ||
    !Number.isInteger(+numOfApartments) || !Number.isInteger(+apartment)) {
    alert('Числа должны быть целыми');
} else if (+numOfStoreys === 0 || +numOfEntrances === 0 || +numOfApartments === 0 ||
    +apartment === 0) {
    alert('Номера не должны равняться 0');
} else if (+apartment === numOfStoreys * numOfApartments * numOfEntrances) {
    alert(`Нужна квартира находится в подъезде ${numOfEntrances}`);
} else {
    let entrance = Math.floor((Math.floor(apartment / numOfApartments) + 1) / numOfStoreys) + 1;

    if (entrance > numOfEntrances) {
        alert(`Введено неверное количество подъездов. Данная квартира должна находиться в подъезде ${entrance}`);
    } else {
        alert(`Нужна квартира находится в подъезде ${entrance}`);
    }
}



