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
import org.krzystian.backend.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/orders")
public class OrderController {

    private OrderService orderService;

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong :(");
    }

    @PutMapping("/place")
    public ResponseEntity<String> placeOrder(@RequestBody OrderDto orderDto) {
        String response = orderService.placeOrder(orderDto);
        return ResponseEntity.ok(response);
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
