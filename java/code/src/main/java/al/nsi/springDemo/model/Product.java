package al.nsi.springDemo.model;

/**
 * This is an example of JavaDoc
 * 
 * The class documented is <b>Product</b>
 */

public class Product {
    private Integer id;
    private String name;

    public Product(){};

    public Product(Integer id, String name){
        this.id=id;
        this.name=name;
    }

    
    /** 
     * @return Integer
     */
    public Integer getId(){
        return id;
    }

    
    /** 
     * @return String
     */
    public String getName(){
        return name;

    }

    
    /** 
     * @param id
     */
    public void setId(Integer id){
        this.id = id;
    }

    
    /** 
     * @param name
     */
    public void setName(String name){
        this.name = name;
    }
    
}
