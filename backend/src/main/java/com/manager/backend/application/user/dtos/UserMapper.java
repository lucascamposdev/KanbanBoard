package com.manager.backend.application.user.dtos;

import com.manager.backend.domain.user.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
        public User toEntity(UserRequestDto userRequestDTO) {
            User user = new User();

            user.setFirstName(userRequestDTO.getFirstName());
            user.setLastName(userRequestDTO.getLastName());
            user.setEmail(userRequestDTO.getEmail());
            user.setPassword(userRequestDTO.getPassword());

            return user;
        }

        public UserResponseDto toResponse(User user) {
            UserResponseDto userResponse = new UserResponseDto();

            userResponse.setFirstName(user.getFirstName());
            userResponse.setLastName(user.getLastName());
            userResponse.setEmail(user.getEmail());

            return userResponse;
        }
}
