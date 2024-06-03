package org.krzystian.backend.service;

import org.krzystian.backend.dto.UserDto;

public interface UserService {
    void createUser(UserDto userDto);

    void deleteUser(Long userId);

    Long authenticateUser(UserDto userDto);

    Boolean doesExist(UserDto userDto);

    boolean isEmployee(String email);
}
