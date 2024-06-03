package org.krzystian.backend.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.service.OrderService;
import org.krzystian.backend.service.ProductService;
import org.krzystian.backend.service.CartDetailsService;

@ExtendWith(MockitoExtension.class)
public class OrderControllerTest {

    @Mock
    private OrderService orderService;

    @InjectMocks
    private OrderController orderController;

    private OrderDto orderDto;
    private CartDetailsDto cartDetailsDto;
    private ProductDto productDto;

    @BeforeEach
    public void setUp() {
        orderDto = new OrderDto();
        orderDto.setOrderId(1L);
        orderDto.setOrderDate(new Date());
        orderDto.setShipCity("City");
        orderDto.setShipPostalCode("12345");
        orderDto.setShipAddress("Address");
        orderDto.setCustomersPhone("123456789");
        orderDto.setCustomerId(1L);

        cartDetailsDto = new CartDetailsDto();
        cartDetailsDto.setProductId(1L);
        cartDetailsDto.setQuantity(1);

        productDto = new ProductDto();
        productDto.setId(1L);
        productDto.setUnitsInStock(200);
    }

    @Test
    public void testConcurrentPlaceOrder() throws InterruptedException {
        when(orderService.placeOrder(any(OrderDto.class))).thenAnswer(invocation -> {
            if (productDto.getUnitsInStock() >= cartDetailsDto.getQuantity()) {
                productDto.setUnitsInStock(productDto.getUnitsInStock() - cartDetailsDto.getQuantity());
                return "Pomyslnie zlozono zamowienie!";
            } else {
                return "Nie ma takiej ilości w magazynie";
            }
        });

        ExecutorService executor = Executors.newFixedThreadPool(200);

        Runnable task = () -> {
            ResponseEntity<String> response = orderController.placeOrder(orderDto);
            assertEquals("Pomyslnie zlozono zamowienie!", response);
        };

        for (int i = 0; i < 200; i++){
            executor.submit(task);
        }

        executor.shutdown();
        assertTrue(executor.awaitTermination(10, TimeUnit.SECONDS));

        assertEquals(0, productDto.getUnitsInStock());
    }
}
