class Dircetor{
    constructor(builder){
        this.buider=builder;
    }
    create(cpu,mainboard,ram){
        this.buider.buildCpu(cpu);
        this.buider.buildRam(ram);
        this.buider.buildMainBoard(mainboard);
        return this.buider.create();
    }
}
module.exports = Dircetor;
