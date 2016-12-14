

var iso = new Isomer(document.getElementById("canvas"), {shadows: true});
var Point = Isomer.Point;
var Path = Isomer.Path;
var Shape = Isomer.Shape;
var Color = Isomer.Color;
var Prism = Isomer.Prism;

function shoe() {
    var points = [
        Point(0, 0),
        Point(0.3, 0),
        Point(0.3, 2),
        Point(3.3, 0),
        Point(6.3, 0),
        Point(6.3, 1),
        Point(3.3, 3),
        Point(3.3, 4),
        Point(0, 4)
    ];

    return new Path(points);
}

function L() {
    return new Path([
        Point.ORIGIN,
        Point(1, 0),
        Point(1, 2),
        Point(2, 2),
        Point(2, 3),
        Point(0, 3)
    ]);
}

var U = new Path([
    Point(0, 0),
    Point(4, 0),
    Point(4, 4),
    Point(3, 4),
    Point(3, 1),
    Point(1, 1),
    Point(1, 4),
    Point(0, 4)
]);

var N = new Path([
    Point(0, 0),
    Point(1, 0),
    Point(3, 3),
    Point(3, 0),
    Point(4, 0),
    Point(4, 4),
    Point(3, 4),
    Point(1, 1),
    Point(1, 4),
    Point(0, 4)
]);

var I = new Path([
    Point(0, 0),
    Point(1, 0),
    Point(1, 4),
    Point(0, 4)
]);

var T = new Path([
    Point(1, 0),
    Point(2, 0),
    Point(2, 3),
    Point(3, 3),
    Point(3, 4),
    Point(0, 4),
    Point(0, 3),
    Point(1, 3)
]);

var table = new Path([
    Point(0, 0),
    Point(0, 0.8),
    Point(1, 0.8),
    Point(1, 0),
    Point(0.8, 0),
    Point(0.8, 0.6),
    Point(0.2, 0.6),
    Point(0.2, 0)
]);

function tableGenerator(x, y)
{
    var innerLeg = (x - 0.2);
    var path = new Path([
        Point(0, 0),
        Point(0, 1),
        Point(x, 1),
        Point(x, 0),
        Point(innerLeg, 0),
        Point(innerLeg, 0.8),
        Point(0.2, 0.8),
        Point(0.2, 0)
    ]);
    
    return Shape.Extrude(path, y);
}

document.addEventListener('DOMContentLoaded', function () {
    let tableColor = Color(211,84,0);
    iso.add(Shape.Box(20, 0.5, 20), Point(-10, -0.5, -10), Color(184, 193, 197), {});
    iso.add(tableGenerator(2, 1), Point(1, 0, 1), tableColor, {receiveShadow : false});
    iso.add(tableGenerator(1, 2), Point(3, 0, 3), tableColor, {receiveShadow : false});
    iso.add(tableGenerator(1, 1), Point(2, 0, -1), tableColor, {receiveShadow : false});
    iso.render();
});
