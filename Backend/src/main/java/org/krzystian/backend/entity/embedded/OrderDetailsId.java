package org.krzystian.backend.entity.embedded;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable

public class OrderDetailsId implements Serializable {
    private Long orderId;
    private Long productId;
}
