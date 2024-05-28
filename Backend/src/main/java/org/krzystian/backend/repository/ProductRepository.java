package org.krzystian.backend.repository;

import org.krzystian.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryID(Long categoryID);
}
