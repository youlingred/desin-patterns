class Shape{

    draw(){

    }
}
class ShapeFactory{
    static getShape(type){
        switch (type){
            case 'circle':
                return new Circle();
            case 'rect':
                return new Rect();
        }
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
