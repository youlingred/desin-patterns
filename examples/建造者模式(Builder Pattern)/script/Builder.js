const BuilderAbstract = require('./BuilderAbstract');
const Product= require('./Product')
class Builder extends BuilderAbstract{
    constructor(product){
        super()
        this.product=new Product();
    }
    buildCpu(cpu){
        this.product.setCpu(cpu)
    }
    buildMainBoard(mainBoard){
        this.product.setMainBoard(mainBoard)
    }
    buildRam(ram){
        this.product.setRam(ram);
    }
    create(){
        return this.product;
    }
}
module.exports=Builder;
