package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.repository.OrderRepository;
import org.krzystian.backend.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Override
    public List<Object[]> getOrderValuesByMonthLastYear() {
        return orderRepository.getOrderValuesByMonthLastYear();
    }

    @Override
    public List<Object[]> getCurrentYearSalesData() {
        return orderRepository.getCurrentYearSalesData();
    }
}
