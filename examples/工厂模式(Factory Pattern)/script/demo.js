const ShapeFactory = require('./ShapeFactory');
const ColorFactory = require('./ColorFactory');

const circle=ShapeFactory.getShape('circle');
circle.draw();
const rect=ShapeFactory.getShape('rect');
rect.draw();

const red =ColorFactory.getColor('red');
red.fill();
const blue=ColorFactory.getColor('blue');
blue.fill();
