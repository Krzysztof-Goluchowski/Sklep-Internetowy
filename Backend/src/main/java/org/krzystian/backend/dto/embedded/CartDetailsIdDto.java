package org.krzystian.backend.dto.embedded;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.krzystian.backend.dto.ProductDto;
import org.krzystian.backend.dto.UserDto;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CartDetailsIdDto {
//    private UserDto userDto;
//    private ProductDto productDto;

    private Long userId;
    private Long productId;
}
