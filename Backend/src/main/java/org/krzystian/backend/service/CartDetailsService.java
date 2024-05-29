package org.krzystian.backend.service;

import org.krzystian.backend.dto.CartDetailsDto;

import java.util.List;

public interface CartDetailsService {
    CartDetailsDto addProduct(Long userId, Long productId);

    CartDetailsDto removeProduct(Long userId, Long productId);

    CartDetailsDto setProductQuantity(Long userId, Long productId, int quantity);

    List<CartDetailsDto> getCartDetailsByUserId(Long userId);
}
