package al.nsi.springDemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import al.nsi.springDemo.model.Product;
import al.nsi.springDemo.service.ProductService;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public ResponseEntity<Object> getProduct(){
        return new ResponseEntity<>(productService.getProducts(), HttpStatus.OK);

    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable("id") Integer id){
		productService.deleteProduct(id);
		return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
	}

    @RequestMapping(value = "/products", method = RequestMethod.POST)
	public ResponseEntity<Object> createProduct(@RequestBody Product product){
		productService.createProduct(product);
		return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
	}

    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateProduct(@PathVariable("id") int id, @RequestBody Product product){
		productService.updateProduct(id, product);
		return new ResponseEntity<>("Product is updated successfully", HttpStatus.OK);
	}

}
    

