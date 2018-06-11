/**
 * 工厂提供者类
 */
class FactoryProvider{
    /**
     *
     * @param type
     * @returns {Factory}
     */
    static getFactory(type){
        switch (type){
            case 'shape':
                return ShapeFactory;
            case 'color':
                return ColorFactory;
            default:
                return null
        }
    }
}

/**
 * 工厂基类
 */
class Factory{
    static getShape(){

    }
    static getColor(){

    }
}
/**
 * Shape工厂类
 */
class ShapeFactory extends Factory{
    /**
     *
     * @param type
     * @returns {Shape}
     */
    static getShape(type){
        switch (type){
            case 'circle':
                return new Circle();
            case 'rect':
                return new Rect();
            default:
                return null;
        }
    }
}

/**
 * shape基础类
 */
class Shape{

    draw(){

    }
}
class Circle extends Shape{
    draw(){
        console.log('draw Circle')
    }
}
class Rect extends Shape{
    draw(){
        console.log('draw Rect')
    }
}

class ColorFactory extends Factory{

    static getColor(type){
        switch (type){
            case 'red':
                return new Red();
            case 'blue':
                return new Blue();
            default:
                return null;
        }
    }
}
/**
 * shape基础类
 */
class Color{

    fill(){

    }
}
class Red extends Color{
    fill(){
        console.log('fill with red')
    }
}
class Blue extends Color{
    fill(){
        console.log('fill with blue')
    }
}

const circle=FactoryProvider.getFactory('shape').getShape('circle');
circle.draw();
const rect=FactoryProvider.getFactory('shape').getShape('rect');
rect.draw();

const blue=FactoryProvider.getFactory('color').getColor('blue')
blue.fill();
const red=FactoryProvider.getFactory('color').getColor('red')
red.fill();
