const ShapeFactory= require('./ShapeFactory');
const ColorFactory= require('./ColorFactory');
/**
 * 工厂创造器/生成器类
 */
class FactoryProducer{
    /**
     *
     * @param type
     * @returns {AbstractFactory}
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
module.exports=FactoryProducer
