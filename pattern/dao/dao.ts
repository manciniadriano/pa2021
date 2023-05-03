class User{
    user:string;
    email:string;
    //constructors / standard setters / getters
    constructor(user: string, email: string){
        this.user = user;
        this.email = email;
    }
 }

 interface Dao<T> {
    get(id:number):T;
    getAll():T[];
    save(t:T): void;
    update(t:T, ...params:string[]): void;
    delete(t:T): void;
}


class UserDaoImpl implements Dao<User>{

    private users: User[] = new Array();
    
    constructor() {
        this.users.push(new User("Adriano", "adriano@mailinator.com"))
        this.users.push(new User("Pippo", "pippo@mailinator.com"))
        
    }

    get(id: number): User {
        return this.users[id];
    }
    getAll(): User[] {
        return this.users;
    }
    save(t: User): void {
        this.users.push(t);
    }
    update(t: User, ...params: string[]): void {
        throw new Error("Method not implemented.");
    }
    delete(t: User): void {
        this.users = this.users.filter( (item: User, index: number) => item.email !== t.email && item.user !== t.user);
    }
}

class UserDAOApplication{
    userDao: UserDaoImpl;  
    
    constructor(){
        this.userDao = new UserDaoImpl();
    }

    getUser(id: number):User{
        return this.userDao.get(id);
    }
}

let myApp:UserDAOApplication = new UserDAOApplication();
console.log(myApp.getUser(1));
