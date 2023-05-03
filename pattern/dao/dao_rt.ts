class User{
    private user: string;
    private email: string;
    constructor(user: string, email: string){
        this.user = user;
        this.email = email;
    }
    //TBD: setters / getters
}

interface IDao<T>{
    create(item: T): void;
    read(id: number): T;
    readAll(): T[]; 
    update(item: T): void;
    delete(item:T): void;
}






class DaoUser implements IDao<User>{
    
    private users: User[];
    
    constructor(){
        this.users = new Array();
    }
    
    create(item: User): void {
        throw new Error("Method not implemented.");
    }
    read(id: number): User {
        throw new Error("Method not implemented.");
    }
    readAll(): User[] {
        throw new Error("Method not implemented.");
    }
    update(item: User): void {
        throw new Error("Method not implemented.");
    }
    delete(item: User): void {
        throw new Error("Method not implemented.");
    }
}

