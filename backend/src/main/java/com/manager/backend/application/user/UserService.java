package com.manager.backend.application.user;

import com.manager.backend.application.exceptions.EmailAlreadyExistsException;
import com.manager.backend.application.user.dtos.UserMapper;
import com.manager.backend.application.user.dtos.UserRequestDto;
import com.manager.backend.application.user.dtos.UserResponseDto;
import com.manager.backend.domain.user.User;
import com.manager.backend.infra.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Autowired
    UserMapper userMapper;

    public UserResponseDto create (UserRequestDto dto){
        if(this.repository.findByEmail(dto.getEmail()) != null )
            throw new EmailAlreadyExistsException("Email already exists");

        dto.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));

        User entity = userMapper.toEntity(dto);
        User createdUser = this.repository.save(entity);

        return userMapper.toResponse(createdUser);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }
}
