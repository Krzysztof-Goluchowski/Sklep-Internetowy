package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.Order;

public class OrderMapper {
    public static OrderDto mapToOrderDto(Order order) {
        return new OrderDto(
                order.getOrderId(),
                order.getOrderDate(),
                order.getShipCity(),
                order.getShipPostalCode(),
                order.getShipAddress(),
                order.getCustomersPhone(),
                UsersMapper.mapToUserDto(order.getCustomer())
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
                UsersMapper.mapToUser(orderDto.getCustomer())
        );
    }
}
