package al.nsi.springDemo.model;
/**
 * This is an example of JavaDoc
 * 
 * The class documented is <b>Student</b>
 */
public class Student {
    private String name;
    private String surname;
    private int tel;

    public Student(String name, String surname, int tel){
        this.name = name;
        this.surname = surname;
        this.tel = tel;
    }

    
    /** 
     * @return String
     */
    public String getName(){
        return name;
    }

    
    /** 
     * @return String
     */
    public String getSurname(){
        return surname;
    }

    
    /** 
     * @return int
     */
    public int getTel(){
        return tel;
    }
    
    /** 
     * @param name
     */
    public void setName(String name){
        this.name = name;
    }

    
    /** 
     * @param surname
     */
    public void setSurame(String surname){
        this.surname = surname;
    }

    
    /** 
     * @param tel
     */
    public void setTel(int tel){
        this.tel = tel;
    }

}
