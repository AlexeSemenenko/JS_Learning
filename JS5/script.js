const checkRectangle = points => {
    if (points[0].x === points[1].x && points[1].y === points[2].y && points[2].x === points[3].x
        && points[3].y === points[0].y) {
        return true;
    }
    return points[0].y === points[1].y && points[1].x === points[2].x && points[2].y === points[3].y
        && points[3].x === points[0].x;

}

const checkPoint = (newPoint, points) => {
    let maxX = points[0].x;
    let minX = points[0].x;
    let maxY = points[0].y;
    let minY = points[0].y;

    for (let i = 1; i < points.length; i++) {
        if (points[i].x > maxX) {
            maxX = points[i].x;
        }
        if (points[i].x < minX) {
            minX = points[i].x;
        }
        if (points[i].y > maxY) {
            maxY = points[i].y;
        }
        if (points[i].y < minY) {
            minY = points[i].y;
        }
    }

    return newPoint.x <= maxX && newPoint.x >= minX && newPoint.y <= maxY && newPoint.y >= minY;
}

let points = [];

for (let i = 0; i < 4; i++) {
    let coordinate = {};
    coordinate.x = +prompt(`Введите 1 координату ${i + 1} точки`);
    coordinate.y = +prompt(`Введите 2 координату ${i + 1} точки`);

    points.push(coordinate);
}

if (checkRectangle(points)) {
    alert('Данные координаты соответствуют вершинам прямоугольника');

    let newPoint = {};

    newPoint.x = +prompt('Введите 1 координату точку, которую нужно проверить на принадлежность прямоугольнику');
    newPoint.y = +prompt('Введите 2 координату точку, которую нужно проверить на принадлежность прямоугольнику');

    if (checkPoint(newPoint, points)) {
        alert('Данная точка принадлежит прямоугольнику');
    } else {
        alert('Данная точка не принадлежит прямоугольнику');
    }
} else {
    alert('Данные координаты не соответствуют вершинам прямоугольника');
}
