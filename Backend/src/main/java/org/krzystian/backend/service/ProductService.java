package org.krzystian.backend.service;

import org.krzystian.backend.dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);

    ProductDto getProductById(Long productId);

    List<ProductDto> getAllProducts();

    ProductDto updateProduct(Long productId, ProductDto updatedProduct);

    void deleteProduct(Long productId);

    ProductDto updateProductPrice(Long productId, double price);

    boolean checkIfInStock(Long productId, int quantity);

    void removeFromStock(Long productId, int quantity);
}
