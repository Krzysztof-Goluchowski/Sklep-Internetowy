package org.krzystian.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.CategoryDto;
import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.service.ProductService;
import org.krzystian.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<ProductDto> createProduct(@RequestParam("image") MultipartFile image,
                                                    @RequestParam("category") String categoryJson,
                                                    @RequestParam("name") String name,
                                                    @RequestParam("price") double price,
                                                    @RequestParam("initial_price") double initialPrice) {

        CategoryDto categoryDto;
        try {
            categoryDto = new ObjectMapper().readValue(categoryJson, CategoryDto.class);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        ProductDto productDto = new ProductDto();
        productDto.setCategory(categoryDto);
        productDto.setName(name);
        productDto.setPrice(price);
        productDto.setInitialPrice(initialPrice);
        try {
            productDto.setImage(image.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        ProductDto savedProduct = productService.createProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductDto>> getAllProducts(){
        List<ProductDto> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId){
        productService.deleteProduct(productId);
        return ResponseEntity.ok("Product deleted successfully!");
    }

    @PutMapping("/edit-price/{id}")
    public ResponseEntity<String> updateProductPrice(@PathVariable("id") Long productId, @RequestBody ProductDto updatedProduct) {
        productService.updateProductPrice(productId, updatedProduct.getPrice());
        return ResponseEntity.ok("Product updated successfully!");
    }
}
