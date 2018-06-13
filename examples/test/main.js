class A {
    constructor(s){
        this._a=s
    }
    get a(){
        return this._a;
    }
}
class B {
    constructor(){
        this.b=1;
    }
}
class C extends A{
}
const aa=new A(55);
console.log(aa.a)

// const c=new C();
// console.log(c.a);
// console.log(c.b);

