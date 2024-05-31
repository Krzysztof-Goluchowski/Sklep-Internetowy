package org.krzystian.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrderDetailsDto {
    private Long orderId;
    private Long productId;
    private Integer quantity;
    private Double unitPrice;
}
