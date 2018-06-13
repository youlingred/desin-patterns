/**
 * 要组装一台电脑（Computer类），我们假设它有三个部件：CPU 、主板以及内存。
 * 在Computer类中提供三个set方法分别设置这三个属性。
 */
class Product{
    constructor(){
        this.cpu=null;
        this.mainBoard=null;
        this.ram=null;
    }

    setCpu(cpu){
        this.cpu=cpu;
    }
    setRam(ram){
        this.ram=ram;
    }
    setMainBoard(mainBoard){
        this.mainBoard=mainBoard;
    }
    show(){
        console.log('cpu:',this.cpu);
        console.log('ram:',this.ram);
        console.log('main_board:',this.mainBoard);
    }
}

module.exports = Product;
