package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.entity.CartDetails;
import org.krzystian.backend.entity.embedded.CartDetailsId;

public class CartDetailsMapper {
    public static CartDetailsDto mapToCartDetailsDto(CartDetails cartDetails) {
        return new CartDetailsDto(
                cartDetails.getCartId().getUserId(),
                cartDetails.getCartId().getProductId(),
                cartDetails.getQuantity()
        );
    }

    public static CartDetails mapToCartDetails(CartDetailsDto cartDetailsDto) {
        CartDetailsId cartDetailsId = new CartDetailsId(
                cartDetailsDto.getUserId(),
                cartDetailsDto.getProductId()
        );
        return new CartDetails(
                cartDetailsId,
                null,
                null,
                cartDetailsDto.getQuantity()
        );
    }
}
