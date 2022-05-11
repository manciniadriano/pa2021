package al.nsi.springDemo.exception;

public class MyAPIException extends Exception{
    public MyAPIException(String msg){
        super(msg);              
    }
    public MyAPIException(){
        super();        
    }
}
