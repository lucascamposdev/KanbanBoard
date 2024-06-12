package com.manager.backend.application.user;

import com.manager.backend.application.user.dtos.UserLoginDto;
import com.manager.backend.application.user.dtos.UserRequestDto;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid UserRequestDto dto){
        var createdUser = userService.create(dto);
        return ResponseEntity.ok().body(createdUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid UserLoginDto dto){
        var token = authenticationService.login(dto);
        return ResponseEntity.ok(token);
    }

}
