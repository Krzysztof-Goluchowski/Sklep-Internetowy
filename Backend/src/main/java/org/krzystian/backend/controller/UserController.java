package org.krzystian.backend.controller;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody UserDto userDto){
        boolean isEmployee = false;
        Long loggedUserId = userService.authenticateUser(userDto);
        if (loggedUserId > 0){
            isEmployee = userService.isEmployee(userDto.getEmail());
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Zalogowano pomyślnie!");
            response.put("isEmployee", isEmployee);
            response.put("loggedUserId", loggedUserId);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDto newUser) {
        boolean doesExist = userService.doesExist(newUser);
        if (!doesExist){
            userService.createUser(newUser);
            return ResponseEntity.ok("Zarejestrowano pomyslnie\nWitaj " + newUser.getFirstName() + "!");
        }
        return ResponseEntity.ok("Użytkownik z podanym Email już istnieje! Zaloguj się.");

    }
}
