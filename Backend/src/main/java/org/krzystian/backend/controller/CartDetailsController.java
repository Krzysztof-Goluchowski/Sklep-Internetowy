package org.krzystian.backend.controller;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.dto.embedded.CartDetailsIdDto;
import org.krzystian.backend.entity.CartDetails;
import org.krzystian.backend.entity.embedded.CartDetailsId;
import org.krzystian.backend.service.CartDetailsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")

public class CartDetailsController {
    private final CartDetailsService cartDetailsService;

    @PutMapping("/add")
    public ResponseEntity<CartDetailsDto> addProduct(@RequestBody CartDetailsIdDto cartDetailsIdDto) {
//        CartDetailsDto savedCartDetailsDto = cartDetailsService.addProduct(cartDetailsIdDto.getUserDto().getId(), cartDetailsIdDto.getProductDto().getId());
        CartDetailsDto savedCartDetailsDto = cartDetailsService.addProduct(cartDetailsIdDto.getUserId(), cartDetailsIdDto.getProductId());
        return ResponseEntity.ok(savedCartDetailsDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CartDetailsDto>> getAllCartItems(@RequestBody UserDto userDto) {
        System.out.println("rwqe\nrwqe\nrwqe\nrwqe\n");
        List<CartDetailsDto> allCartDetailsDto = cartDetailsService.getCartDetailsByUserId(userDto.getId());
        return ResponseEntity.ok(allCartDetailsDto);
    }
}
