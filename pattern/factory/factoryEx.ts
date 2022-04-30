interface  Animal {
    getCall():string;
}

class Dog implements Animal {
    getCall():string {
        return "Bau";
    }
}
class Cat implements Animal {
    public getCall():string {
        return "Miao";
    }
}

enum AnimalEnum {
    Cat,
    Dog
}

class AnimalFactory {
    constructor(){}
    getAnimal (type:AnimalEnum):Animal{
        let retval:Animal = null;
        switch (type){
            case AnimalEnum.Cat:
                retval = new Cat();
                break;
            case AnimalEnum.Dog:
                retval = new Dog();
                break;
        }
        return retval;
    }
}

let factory:AnimalFactory  = new AnimalFactory();
console.log(factory.getAnimal(AnimalEnum.Cat).getCall());
console.log(factory.getAnimal(AnimalEnum.Dog).getCall());