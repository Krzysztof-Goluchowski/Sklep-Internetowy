package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.OrderDetails;
import org.krzystian.backend.entity.embedded.OrderDetailsId;
import org.krzystian.backend.exception.ResourceNotFoundException;
import org.krzystian.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class OrderDetailsMapper {

    public static OrderDetailsDto mapToOrderDetailsDto(OrderDetails orderDetails) {
        return new OrderDetailsDto(
                orderDetails.getOrderDetailsId().getOrderId(),
                orderDetails.getOrderDetailsId().getProductId(),
                orderDetails.getQuantity(),
                orderDetails.getUnitPrice()
        );
    }

    public static OrderDetails mapToOrderDetails(OrderDetailsDto orderDetailsDto) {

        OrderDetailsId orderDetailsId = new OrderDetailsId(
                orderDetailsDto.getOrderId(),
                orderDetailsDto.getProductId());

        return new OrderDetails(
                orderDetailsId,
                null,
                null,
                orderDetailsDto.getQuantity(),
                orderDetailsDto.getUnitPrice()
        );
    }
}
