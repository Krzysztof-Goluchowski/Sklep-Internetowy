package org.krzystian.backend.repository;

import org.krzystian.backend.entity.Category;
import org.krzystian.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Override
    List<Category> findAll();
}
