package org.krzystian.backend.service;

import org.krzystian.backend.dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);

    List<ProductDto> getAllProducts();

    void deleteProduct(Long productId);

    void updateProductPrice(Long productId, double price);

    boolean checkIfInStock(Long productId, int quantity);

    void removeFromStock(Long productId, int quantity);
}
