package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.Order;

import java.util.List;

public class OrderMapper {
    public static OrderDto mapToOrderDto(Order order) {
        return new OrderDto(
                order.getOrderId(),
                order.getOrderDate(),
                order.getShipCity(),
                order.getShipPostalCode(),
                order.getShipAddress(),
                order.getCustomersPhone(),
                order.getCustomerId()
        );
    }

    public static Order mapToOrder(OrderDto orderDto) {
        return new Order(
                orderDto.getOrderId(),
                orderDto.getOrderDate(),
                orderDto.getShipCity(),
                orderDto.getShipPostalCode(),
                orderDto.getShipAddress(),
                orderDto.getCustomersPhone(),
                orderDto.getCustomerId()
        );
    }
}
