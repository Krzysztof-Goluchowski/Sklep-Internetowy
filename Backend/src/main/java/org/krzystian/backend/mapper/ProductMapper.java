package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product){
        return new ProductDto(
                product.getId(),
                product.getCategoryID(),
                product.getName(),
                product.getPrice(),
                product.getInitialPrice(),
                product.getImage()
        );
    }

    public static Product mapToProduct(ProductDto productDto){
        return new Product(
                productDto.getId(),
                productDto.getCategoryID(),
                productDto.getName(),
                productDto.getPrice(),
                productDto.getInitialPrice(),
                productDto.getImage()
        );
    }
}
