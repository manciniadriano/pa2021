package al.nsi.springDemo.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import al.nsi.springDemo.model.Product;

@Service
public class ProductServiceImpl implements ProductService {
    private static Map<Integer, Product> productRepo = new HashMap<>();
    //for auto id generation
    private final AtomicLong counter = new AtomicLong();

    public ProductServiceImpl(){
        //loading data
        Product honey = new Product();
        honey.setId((int)counter.incrementAndGet());
        honey.setName("HoneY");
        productRepo.put(honey.getId(), honey);

        Product almond = new Product();
        almond.setId((int)counter.incrementAndGet());
        almond.setName("Almond");
        productRepo.put(almond.getId(), almond);

    }

    @Override
    public void createProduct(Product product) {
        //check if that product exists in the hasmap
        if(productRepo.containsKey(product.getId())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Existing id...");
        }
        //if it does not exist, then  I add it to the hasmap
        productRepo.put(product.getId(), product);
        
    }

    @Override
    public void updateProduct(Integer id, Product product) {
        productRepo.remove(id); //remove the element from hashmap
        product.setId(id);
        productRepo.put(id, product);
        
    }

    @Override
    public void deleteProduct(Integer id) {
        productRepo.remove(id);
        
    }

    @Override
    public Collection<Product> getProducts() {
        //list of all products
        return productRepo.values();
    }
}

