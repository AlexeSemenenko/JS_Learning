let numOfStoreys = prompt('Введите количество этажей');
let numOfEntrances = prompt('Введите количество подъездов');
let numOfApartments = prompt('Введите количество квартир на этаже');
let apartment = prompt('Введите номер квартиры');

if (numOfStoreys != numOfStoreys * 1 || numOfEntrances != numOfEntrances * 1 ||
    numOfApartments != numOfApartments * 1 || apartment != apartment * 1) {
    alert('Что-то пошло не так, введите данные повторно'); //коммент: можно добавить проверку на целочисленность

} else {
    //коммент: неправильный результат при numOfStoreys = 20, numOfEntrances = 1, numOfApartments = 1, apartment = 20.
    let entrance = Math.floor((Math.floor(apartment / numOfApartments) + 1) / numOfStoreys) + 1;

    if (entrance > numOfEntrances) {
        alert(`Введено неверное количество подъездов. Данная квартира должна находиться в подъезде ${entrance}`);
    } else {
        alert(`Нужна квартира находится в подъезде ${entrance}`);
    }
}



