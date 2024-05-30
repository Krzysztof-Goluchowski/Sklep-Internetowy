package org.krzystian.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.krzystian.backend.entity.embedded.CartDetailsId;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cart_details")

public class CartDetails {
    @EmbeddedId
    private CartDetailsId cartId;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;

    public void incrementQuantity() {
        quantity++;
    }

    public int decrementQuantity() {
        if (quantity > 0)
            quantity--;
        return quantity;
    }
}
