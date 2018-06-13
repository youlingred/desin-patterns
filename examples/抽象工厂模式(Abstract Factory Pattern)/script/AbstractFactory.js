/**
 * 抽象工厂类
 */
class AbstractFactory{
    static getShape(){
        throw new Error('未实现该抽象类方法')
    }
    static getColor(){
        throw new Error('未实现该抽象类方法')
    }
}

module.exports=AbstractFactory
