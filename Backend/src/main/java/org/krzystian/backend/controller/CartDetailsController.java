package org.krzystian.backend.controller;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.dto.embedded.CartDetailsIdDto;
import org.krzystian.backend.entity.CartDetails;
import org.krzystian.backend.entity.embedded.CartDetailsId;
import org.krzystian.backend.service.CartDetailsService;
import org.krzystian.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")

public class CartDetailsController {
    private final CartDetailsService cartDetailsService;
    private final ProductService productService;

    @PostMapping("/all")
    public ResponseEntity<List<CartDetailsDto>> getAllCartItems(@RequestBody UserDto userDto) {
        List<CartDetailsDto> allCartDetailsDto = cartDetailsService.getCartDetailsByUserId(userDto.getId());
        return ResponseEntity.ok(allCartDetailsDto);
    }

    @PutMapping("/add")
    public ResponseEntity<CartDetailsDto> addProduct(@RequestBody CartDetailsIdDto cartDetailsIdDto) {
        CartDetailsDto savedCartDetailsDto = cartDetailsService.addProduct(
                cartDetailsIdDto.getUserId(), cartDetailsIdDto.getProductId());
        return ResponseEntity.ok(savedCartDetailsDto);
    }

    @PutMapping("/remove")
    public ResponseEntity<CartDetailsDto> removeProduct(@RequestBody CartDetailsIdDto cartDetailsIdDto) {
        CartDetailsDto savedCartDetailsDto = cartDetailsService.removeProduct(
                cartDetailsIdDto.getUserId(), cartDetailsIdDto.getProductId());
        return ResponseEntity.ok(savedCartDetailsDto);
    }

    @PutMapping("/set")
    public ResponseEntity<?> setProductQuantity(
            @RequestBody CartDetailsIdDto cartDetailsIdDto,
            @RequestParam int quantity) {

        boolean isInStock = productService.checkIfInStock(cartDetailsIdDto.getProductId(), quantity);
        if (isInStock){
            CartDetailsDto savedCartDetailsDto = cartDetailsService.setProductQuantity(
                    cartDetailsIdDto.getUserId(), cartDetailsIdDto.getProductId(), quantity);
            return ResponseEntity.ok(savedCartDetailsDto);
        }
        return ResponseEntity.badRequest().body("The requested quantity exceeds the available stock");

    }
}
