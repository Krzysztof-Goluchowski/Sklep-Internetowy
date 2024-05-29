package org.krzystian.backend.entity.embedded;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.*;
import org.krzystian.backend.entity.Product;
import org.krzystian.backend.entity.User;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable

public class CartDetailsId implements Serializable {
    private Long userId;
    private Long productId;


}
