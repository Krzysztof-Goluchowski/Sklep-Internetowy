package org.krzystian.backend.service;

import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.entity.User;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updatedUser);

    void deleteUser(Long userId);

    Boolean authenticateUser(UserDto userDto);

    Boolean doesExist(UserDto userDto);
}
