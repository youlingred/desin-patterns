/**
 * Shape工厂类
 */
class ShapeFactory{
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
    constructor(){
        super();
    }
    draw(){
        console.log('draw Circle')
    }
}
class Rect extends Shape{
    constructor(){
        super();
    }
    draw(){
        console.log('draw Rect')
    }
}

const circle=ShapeFactory.getShape('circle');
circle.draw();
const rect=ShapeFactory.getShape('rect');
rect.draw();
