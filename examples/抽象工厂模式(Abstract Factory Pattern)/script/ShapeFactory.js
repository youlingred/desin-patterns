const AbstractFactory=require ('./AbstractFactory');
const Circle= require('./Circle');
const Rect= require('./Rect');
/**
 * Shape工厂类
 */
class ShapeFactory extends AbstractFactory{
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

module.exports=ShapeFactory
