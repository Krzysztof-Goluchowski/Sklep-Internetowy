package org.krzystian.backend.service;

import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.Order;

import java.util.List;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);
    OrderDetailsDto createOrderDetails(OrderDetailsDto orderDetailsDto);
    List<Object[]> getOrderValuesByMonthLastYear();
    List<Object[]> getCurrentYearSalesData();
}
