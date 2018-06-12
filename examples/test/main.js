class A {
    constructor(){
        this.a=1;
    }
}
class B {
    constructor(){
        this.b=1;
    }
}
class C extends A{
}

const c=new C();
console.log(c.a);
console.log(c.b);
