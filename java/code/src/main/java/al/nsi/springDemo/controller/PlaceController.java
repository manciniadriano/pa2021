package al.nsi.springDemo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import al.nsi.springDemo.exception.MyAPIException;
import al.nsi.springDemo.model.Place;
import al.nsi.springDemo.model.Product;
import al.nsi.springDemo.service.PlaceService;
import al.nsi.springDemo.service.ProductService;

@RestController
public class PlaceController {
    @Autowired
    PlaceService placeService;

    @RequestMapping(value = "/places", method = RequestMethod.GET)
    public ResponseEntity<Object> getPlace(){
        return new ResponseEntity<>(placeService.getPlaces(), HttpStatus.OK);

    }

    @RequestMapping(value = "/places/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable("id") Integer id){
		placeService.deletePlace(id);
		return new ResponseEntity<>("Place is deleted successfully", HttpStatus.OK);
	}

    @RequestMapping(value = "/places/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> get(@PathVariable("id") Integer id){		
		return new ResponseEntity<>(placeService.getPlaceById(id), HttpStatus.OK);
	}

    @RequestMapping(value = "/places", method = RequestMethod.POST)
	public ResponseEntity<Object> createPlace(@RequestBody Place place){
		placeService.createPlace(place);
		return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
	}

    @RequestMapping(value = "/places/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateProduct(@PathVariable("id") int id, @RequestBody Place place){
		placeService.updatePlace(id, place);
		return new ResponseEntity<>("Product is updated successfully", HttpStatus.OK);
	}

    @RequestMapping(value = "/placesbytype/{type}", method = RequestMethod.GET)
    public ResponseEntity<Object> getPlaceByType(@PathVariable("type") String type){
        return new ResponseEntity<>(placeService.getPlacebyType(type), HttpStatus.OK);

    }

    @RequestMapping(value = "/placesall/{type}/{city}", method = RequestMethod.GET)
    public ResponseEntity<Object> getPlacesAll(@PathVariable("type") String type, @PathVariable("city") String city){
        return new ResponseEntity<>(placeService.getAllType(type, city), HttpStatus.OK);

    }

    @RequestMapping(value = "/external/places", method = RequestMethod.GET)
    public ResponseEntity<Object> externalPlaces(){
        try {
            return new ResponseEntity<>(placeService.getPlaceFromAPI(), HttpStatus.OK);
        } catch (MyAPIException e) {
            // TODO Auto-generated catch block
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
    

