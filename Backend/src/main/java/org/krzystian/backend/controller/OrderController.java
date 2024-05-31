package org.krzystian.backend.controller;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.entity.Order;
import org.krzystian.backend.mapper.OrderDetailsMapper;
import org.krzystian.backend.mapper.OrderMapper;
import org.krzystian.backend.service.CartDetailsService;
import org.krzystian.backend.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/orders")
public class OrderController {

    private OrderService orderService;
    private CartDetailsService cartDetailsService;

    @PutMapping("/place")
    public ResponseEntity<List<OrderDetailsDto>> placeOrder(@RequestBody OrderDto orderDto) {
        OrderDto savedOrderDto = orderService.createOrder(orderDto);

        List<CartDetailsDto> allCartDetailsDto =
                cartDetailsService.getCartDetailsByUserId(orderDto.getCustomerId());
        List<OrderDetailsDto> allOrderDetailsDto =
                cartDetailsService.mapAllCartDetailsToOrderDetailsDto(allCartDetailsDto, savedOrderDto);

        allOrderDetailsDto
                .forEach(orderDetails -> orderService.createOrderDetails(orderDetails));

        return ResponseEntity.ok(allOrderDetailsDto);
    }

    @GetMapping("/monthly-report")
    public ResponseEntity<?> getMonthlyOrderReport() {
        return ResponseEntity.ok(orderService.getOrderValuesByMonthLastYear());
    }

    @GetMapping("/current-year-sales")
    public ResponseEntity<?> getCurrentYearSales() {
        return ResponseEntity.ok(orderService.getCurrentYearSalesData());
    }
}
