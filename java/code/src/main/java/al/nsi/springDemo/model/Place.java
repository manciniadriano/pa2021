package al.nsi.springDemo.model;

public class Place {

    private Integer id;
    private String name;
    private String type;
    private double lat;
    private double lon;
    private String city;

    public Place(){};

    public Place(int id, String name, String type, double lat, double lon, String city){
        this.id = id;
        this.name=name;
        this.type=type;
        this.lat=lat;
        this.lon=lon;
        this.city=city;

    }

    public String getCity(){
        return city;
    }
    
    public String getType(){
        return type;
    }

    public void setId(int id){
        this.id = id;
    }
    void setType(String type){
        this.type = type;
    }

    public Integer getId(){
        return id;
    }

    public String getName(){
        return name;
    }
    
    public void setName(String name){
        this.name = name;
    }
    
}
