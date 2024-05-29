package org.krzystian.backend.controller;

import lombok.AllArgsConstructor;
import org.krzystian.backend.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/categories")
public class CategoriesController {

    private final CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<Map<String, Long>> getAllCategories(){
        Map<String, Long> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }
}
