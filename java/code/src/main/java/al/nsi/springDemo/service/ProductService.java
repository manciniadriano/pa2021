package al.nsi.springDemo.service;

import java.util.Collection;

import al.nsi.springDemo.model.Product;

public interface ProductService {
    public abstract void createProduct(Product product);
    public abstract void updateProduct(Integer id, Product product);
    public abstract void deleteProduct(Integer id);
    public abstract Collection<Product> getProducts();
    
    
}
