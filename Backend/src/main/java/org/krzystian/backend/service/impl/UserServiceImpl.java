package org.krzystian.backend.service.impl;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.UserDto;
import org.krzystian.backend.entity.User;
import org.krzystian.backend.exception.ResourceNotFoundException;
import org.krzystian.backend.mapper.UsersMapper;
import org.krzystian.backend.repository.UserRepository;
import org.krzystian.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public void createUser(UserDto userDto) {
        User user = UsersMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        UsersMapper.mapToUserDto(savedUser);
    }

    @Override
    public Long authenticateUser(UserDto userDto) {
        User user = userRepository.findByEmail(userDto.getEmail());
        return (user != null && Objects.equals(user.getPassword(), userDto.getPassword())) ? user.getId() : -1;
    }

    @Override
    public Boolean doesExist(UserDto userDto) {
        User user = userRepository.findByEmail(userDto.getEmail());
        return user != null;
    }

    @Override
    public boolean isEmployee(String email) {
        User user = userRepository.findByEmail(email);
        return user.getIsEmployee();
    }
}
