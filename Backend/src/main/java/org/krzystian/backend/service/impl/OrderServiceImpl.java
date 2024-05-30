package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.Order;
import org.krzystian.backend.mapper.OrderMapper;
import org.krzystian.backend.repository.OrderRepository;
import org.krzystian.backend.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        Order createdOrder = OrderMapper.mapToOrder(orderDto);
        Order savedOrder = orderRepository.save(createdOrder);
        return OrderMapper.mapToOrderDto(savedOrder);
    }

    @Override
    public List<Object[]> getOrderValuesByMonthLastYear() {
        return orderRepository.getOrderValuesByMonthLastYear();
    }

    @Override
    public List<Object[]> getCurrentYearSalesData() {
        return orderRepository.getCurrentYearSalesData();
    }
}
