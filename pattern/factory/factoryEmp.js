class Employee {
    speak() {
     return "Hi, I'm a " + this.type + " employee";
    }
}

class FullTimeEmployee extends Employee{
    constructor(data) {
     super();
     this.type = "full time";
     //....
    }
}


class PartTimeEmployee extends Employee{
    constructor(data) {
     super();
     this.type = "part time";
     //....
    }
}


class ContractorEmployee extends Employee{
    constructor(data) {
     super();
     this.type = "contractor";
     //....
    }
}

class MyEmployeeFactory {
    createEmployee(data) {
     if(data.type == 'fulltime') return new FullTimeEmployee(data);
     if(data.type == 'part-time') return new PartTimeEmployee(data);
     if(data.type == 'contractor') return new ContractorEmployee(data);
    }
}

let factory = new MyEmployeeFactory();

let types = ["fulltime", "part-time", "contractor"];
let employees = [];
for(let i = 0; i < 10; i++) {
    employees.push(factory.createEmployee({type: types[Math.floor( (Math.random(2) * 2) )]})    );}

//....
employees.forEach( e => {
    console.log(e.speak());
});