package org.krzystian.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CartDetailsDto {
    private Long userId;
    private Long productId;
    private Integer quantity;
}
