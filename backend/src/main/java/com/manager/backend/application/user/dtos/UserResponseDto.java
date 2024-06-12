package com.manager.backend.application.user.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private String firstName;
    private String lastName;
    private String email;
}
