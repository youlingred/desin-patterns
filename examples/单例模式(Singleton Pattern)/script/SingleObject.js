let instance;
class SingleObject {
    static get instance(){
        return new SingleObject();
    }
    constructor(){
       if(instance)
           return instance;
       this.name='singleObject';
       return instance=this;
    }

}
module.exports=SingleObject;
