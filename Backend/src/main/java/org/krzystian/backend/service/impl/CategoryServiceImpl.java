package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.entity.Category;
import org.krzystian.backend.repository.CategoryRepository;
import org.krzystian.backend.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private CategoryRepository categoryRepository;


    @Override
    public Map<String, Long> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .collect(Collectors.toMap(Category::getName, Category::getCategory_id));
    }
}
