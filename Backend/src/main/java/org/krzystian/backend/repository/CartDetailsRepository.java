package org.krzystian.backend.repository;

import org.krzystian.backend.entity.CartDetails;
import org.krzystian.backend.entity.embedded.CartDetailsId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartDetailsRepository extends JpaRepository<CartDetails, CartDetailsId> {
    List<CartDetails> findByCartIdUserId(Long userId);
}
