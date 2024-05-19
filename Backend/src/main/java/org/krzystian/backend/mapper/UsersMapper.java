package org.krzystian.backend.mapper;

import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.entity.User;

public class UsersMapper {

    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getIsEmployee(),
                user.getPassword()
        );
    }

    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                userDto.getIsEmployee(),
                userDto.getPassword()
        );
    }
}
