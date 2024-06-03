package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.CategoryDto;
import org.krzystian.backend.entity.Category;
import org.krzystian.backend.entity.Product;

public class CategoryMapper {
    public static CategoryDto mapToCategoryDto(Category category){
        return new CategoryDto(
                category.getId(),
                category.getName()
        );
    }

    public static Category mapToCategory(CategoryDto categoryDto){
        return new Category(
                categoryDto.getId(),
                categoryDto.getName()
        );
    }
}
