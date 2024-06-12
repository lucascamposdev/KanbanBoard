package com.manager.backend.application.user.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class UserLoginDto {

    @NotBlank
    private String email;
    @NotBlank
    private String password;
}
