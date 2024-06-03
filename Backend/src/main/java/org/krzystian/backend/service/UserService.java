package org.krzystian.backend.service;

import org.krzystian.backend.dto.UserDto;

public interface UserService {
    void createUser(UserDto userDto);

    Long authenticateUser(UserDto userDto);

    Boolean doesExist(UserDto userDto);

    boolean isEmployee(String email);
}
