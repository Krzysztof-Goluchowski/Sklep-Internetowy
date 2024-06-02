package org.krzystian.backend.service;

import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;

import java.util.List;

public interface CartDetailsService {

    CartDetailsDto setProductQuantity(Long userId, Long productId, int quantity);

    List<CartDetailsDto> getCartDetailsByUserId(Long userId);

    List<OrderDetailsDto> mapAllCartDetailsToOrderDetailsDto(
            List<CartDetailsDto> allCartDetailsDto, OrderDto orderDto);

    void emptyCart(Long userId);
}
