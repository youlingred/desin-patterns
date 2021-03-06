const Red= require('./Red');
const Blue= require('./Blue');

/**
 * color工厂类
 */
class ColorFactory{
    /**
     *
     * @param type
     * @returns {Color}
     */
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
module.exports=ColorFactory
