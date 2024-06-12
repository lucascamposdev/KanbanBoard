package com.manager.backend.application.user;

import com.manager.backend.application.token.TokenService;
import com.manager.backend.application.token.TokenDto;
import com.manager.backend.application.user.dtos.UserLoginDto;
import com.manager.backend.domain.user.User;
import com.manager.backend.infra.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    public TokenDto login(UserLoginDto dto) {
        var credentials = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword());
        var authentication = manager.authenticate(credentials);
        var token = tokenService.generateToken((User) authentication.getPrincipal());
        return new TokenDto(token, ((User) authentication.getPrincipal()).getId());
    }
}
