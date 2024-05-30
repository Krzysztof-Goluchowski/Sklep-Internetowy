package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.OrderDetails;

import java.util.List;
import java.util.stream.Collectors;

public class OrderDetailsMapper {
    public static OrderDetailsDto mapToOrderDetailsDto(OrderDetails orderDetails) {
        return new OrderDetailsDto(
                orderDetails.getOrderDetailsId().getOrderId(),
                orderDetails.getOrderDetailsId().getProductId(),
                orderDetails.getQuantity()
        );
    }

    public static List<OrderDetailsDto> mapAllCartDetailsToOrderDetailsDto(
            List<CartDetailsDto> allCartDetailsDto, OrderDto orderDto) {

        return allCartDetailsDto.stream()
                .map(cartDetailsDto -> mapCartDetailsToOrderDetailsDto(
                        cartDetailsDto, orderDto))
                .collect(Collectors.toList());
    }

    private static OrderDetailsDto mapCartDetailsToOrderDetailsDto(
            CartDetailsDto cartDetailsDto, OrderDto orderDto) {

        return new OrderDetailsDto(
                orderDto.getOrderId(),
                cartDetailsDto.getProductId(),
                cartDetailsDto.getQuantity()
        );
    }
}
