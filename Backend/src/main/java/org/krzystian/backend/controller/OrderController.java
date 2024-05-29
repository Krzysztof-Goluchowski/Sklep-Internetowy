package org.krzystian.backend.controller;

import lombok.AllArgsConstructor;
import org.krzystian.backend.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/orders")
public class OrderController {

    private OrderService orderService;

    @GetMapping("/monthly-report")
    public ResponseEntity<?> getMonthlyOrderReport() {
        return ResponseEntity.ok(orderService.getOrderValuesByMonthLastYear());
    }

    @GetMapping("/current-year-sales")
    public ResponseEntity<?> getCurrentYearSales() {
        return ResponseEntity.ok(orderService.getCurrentYearSalesData());
    }
}
