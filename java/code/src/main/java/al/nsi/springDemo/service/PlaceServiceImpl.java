package al.nsi.springDemo.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Recover;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import al.nsi.springDemo.exception.MyAPIException;
import al.nsi.springDemo.model.Place;

@Service
public class PlaceServiceImpl implements PlaceService{
    private static Map<Integer, Place> placeRepo = new HashMap<>();
    //for auto id generation
    private final AtomicLong counter = new AtomicLong();

    public PlaceServiceImpl(){
        //loading data
        Place p1 = new Place((int)counter.incrementAndGet(),"Pizza and Vino","Restaurant", 10.0,41.0,"Scutari");  
        placeRepo.put(p1.getId(), p1);

        Place p2 = new Place((int)counter.incrementAndGet(),"AlbNSI","Office", 10.0,41.0,"Scutari");  
        placeRepo.put(p2.getId(), p2);

        Place p3 = new Place((int)counter.incrementAndGet(),"Osteria","Restaurant", 10.0,41.0,"Rome");  
        placeRepo.put(p2.getId(), p3);
    }

    @Override
    public void createPlace(Place place){
          //check if that product exists in the hasmap
          if(placeRepo.containsKey(place.getId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Existing id...");
        }
        //if it does not exist, then  I add it to the hasmap
        placeRepo.put(place.getId(), place);
    }


    @Override
    public void deletePlace(Integer id){
        placeRepo.remove(id);
    }

    @Override
    public void updatePlace(Integer id, Place place){
        placeRepo.remove(id);
        place.setId(id);
        placeRepo.put(id, place);
    }

    @Override
    public Collection<Place> getPlaces(){

        return placeRepo.values();        
    }


    @Override
    public ArrayList<Place> getPlacebyType(String type){
        ArrayList<Place> placeType = new ArrayList<>();
        for(Map.Entry<Integer, Place> event : placeRepo.entrySet()){
            if(event.getValue().getType() == type){
                placeType.add(event.getValue());
            }
        }
        return placeType;
    }

    @Override
    public ArrayList<Place> getAllType(String type, String city){
        ArrayList<Place> placeType = new ArrayList<>();
        for(Map.Entry<Integer, Place> event : placeRepo.entrySet()){
            if(event.getValue().getType() == type && event.getValue().getCity() == city){
                placeType.add(event.getValue());
            }
        }
        return placeType;
    }

    @Override
    public Place getPlaceById(Integer id) {
        // TODO Auto-generated method stub
        if(!placeRepo.containsKey(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"The request id is not existing...");
        }
        return placeRepo.get(id);
    }

    @Override
    @Retryable(value = MyAPIException.class, maxAttempts = 1, backoff = @Backoff(delay=100) )
    public ArrayList<Place> getPlaceFromAPI() throws MyAPIException{
        ArrayList<Place> placeType = new ArrayList<>();
        double value = Math.random();
        if( value < 0.5){
            System.out.println("Ahi ahi...let's retry...");
            throw new MyAPIException(); 
        }else{   
            System.out.println("-----" + value + "-----");
            for(Map.Entry<Integer, Place> event : placeRepo.entrySet()){            
                placeType.add(event.getValue());
            }
        }
        return placeType;
    }  
    //Try to uncomment...and then test again ;-)...check on the client side (curl -v) and on the controller side...
    /*@Recover
    public ArrayList<Place> recover(MyAPIException e) {
       System.out.println("Ahi ahi...no other ways...");
       return new ArrayList<Place>();
    }  
    */
}
