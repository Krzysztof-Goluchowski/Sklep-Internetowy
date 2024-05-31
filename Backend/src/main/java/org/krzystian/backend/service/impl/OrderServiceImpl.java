package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.Order;
import org.krzystian.backend.entity.OrderDetails;
import org.krzystian.backend.entity.Product;
import org.krzystian.backend.exception.ResourceNotFoundException;
import org.krzystian.backend.mapper.OrderDetailsMapper;
import org.krzystian.backend.mapper.OrderMapper;
import org.krzystian.backend.repository.OrderDetailsRepository;
import org.krzystian.backend.repository.OrderRepository;
import org.krzystian.backend.repository.ProductRepository;
import org.krzystian.backend.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;
    private ProductRepository productRepository;
    private OrderDetailsRepository orderDetailsRepository;

    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        Order createdOrder = OrderMapper.mapToOrder(orderDto);
        Order savedOrder = orderRepository.save(createdOrder);
        return OrderMapper.mapToOrderDto(savedOrder);
    }

    @Override
    public OrderDetailsDto createOrderDetails(OrderDetailsDto orderDetailsDto) {
        OrderDetails createdOrderDetails =
                OrderDetailsMapper.mapToOrderDetails(orderDetailsDto);
        Order order = orderRepository
                .findById(orderDetailsDto.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Order with given id doesn't exist!"));
        createdOrderDetails.setOrder(order);
        Product product = productRepository
                .findById(orderDetailsDto.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Product with given id doesn't exist!"));
        createdOrderDetails.setProduct(product);

        OrderDetails savedOrderDetails = orderDetailsRepository.save(createdOrderDetails);

        return OrderDetailsMapper.mapToOrderDetailsDto(savedOrderDetails);
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
