class Animal{

    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    toString(){
        console.log('name:'+ this.name + ',Color:'+ this.color);
    }
}

var animal =new Animal('myDog','yellow');
animal.toString();


class Cat extends Animal{
    constructor(action){
        super('cat','white');
        this.action = action;
    }
    toString(){
        console.log(super.toString());
    }
}

var cat = new Cat('catch');
cat.toString();

console.log(cat instanceof Cat);
console.log(cat instanceof Animal);