package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.entity.Product;
import org.krzystian.backend.exception.ResourceNotFoundException;
import org.krzystian.backend.mapper.ProductMapper;
import org.krzystian.backend.repository.ProductRepository;
import org.krzystian.backend.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        Product product = ProductMapper.mapToProduct(productDto);
        Product savedProduct = productRepository.save(product);
        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(ProductMapper::mapToProductDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with given ID doesn't exist"));

        productRepository.deleteById(productId);
    }

    @Override
    public void updateProductPrice(Long productId, double price) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with given ID doesn't exist!"));

        product.setPrice(price);

        productRepository.save(product);
    }

    @Override
    public boolean checkIfInStock(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with given ID doesn't exist!"));

        return product.getUnitsInStock() >= quantity;
    }

    @Override
    public void removeFromStock(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with given ID doesn't exist!"));

        product.removeUnitsInStock(quantity);
    }
}
