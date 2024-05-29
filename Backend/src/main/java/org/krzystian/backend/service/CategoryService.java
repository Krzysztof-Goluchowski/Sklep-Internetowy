package org.krzystian.backend.service;

import org.krzystian.backend.entity.Category;
import java.util.Map;

public interface CategoryService {
    Map<String, Long> getAllCategories();
}
