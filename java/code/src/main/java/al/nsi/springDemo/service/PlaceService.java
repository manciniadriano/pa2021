package al.nsi.springDemo.service;

import java.util.ArrayList;
import java.util.Collection;

import al.nsi.springDemo.exception.MyAPIException;
import al.nsi.springDemo.model.Place;

public interface PlaceService {
    public abstract void createPlace(Place place);
    public abstract void updatePlace(Integer id, Place place);
    public abstract void deletePlace(Integer id);
    public abstract Collection<Place> getPlaces();
    public abstract ArrayList<Place> getPlacebyType(String type); 
    public abstract ArrayList<Place> getAllType(String type, String city); 
    public abstract Place getPlaceById(Integer id);
    public abstract ArrayList<Place> getPlaceFromAPI() throws MyAPIException;
}
