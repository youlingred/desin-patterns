const FactoryProducer = require('./FactoryProducer')

const circle=FactoryProducer.getFactory('shape').getShape('circle');
circle.draw();
const rect=FactoryProducer.getFactory('shape').getShape('rect');
rect.draw();

const blue=FactoryProducer.getFactory('color').getColor('blue')
blue.fill();
const red=FactoryProducer.getFactory('color').getColor('red')
red.fill();
