let errors = ["generic", "forbidden", "bad-request"];
let err = "generic";
//Other stuff...

//example generic error
if(err == "generic") {
    //res.json({error: true, message: "Error message here"});
    console.table({error: true, message: "Generic error message here"});
}

//again...
if(err == "generic") {
    //res.json({error: true, message: "Error message here"});
    console.table({error: true, message: "Generic error message here"});
}

//how to fix....


interface  ErrorMsg {
    getMsg():string;
}

class GenericError implements ErrorMsg {
    getMsg():string {
        return "this is a generic error";
    }
}
class Forbidden implements ErrorMsg {
    public getMsg():string {
        return "no rights...";
    }
}

class BadRequest implements ErrorMsg {
    public getMsg():string {
        return "bad bad...fix and retry...";
    }
}

enum ErrEnum {
    None,
    Generic,
    Forbidden,
    BadRequest
}

class ErrorFactory {
    constructor(){}
    getError (type:ErrEnum):ErrorMsg{
        let retval:ErrorMsg = null;
        switch (type){
            case ErrEnum.Generic:
                retval = new GenericError();
                break;
            case ErrEnum.Forbidden:
                retval = new Forbidden();
                break;
            case ErrEnum.BadRequest:
                retval = new BadRequest();
                break;                
        }
        return retval;
    }
}

let factory:ErrorFactory  = new ErrorFactory();

let errCode = Math.floor( Math.floor( (Math.random() * 3))+1)
console.log(errCode);

if(errCode != ErrEnum.None){
    console.log(factory.getError(errCode).getMsg());
}


