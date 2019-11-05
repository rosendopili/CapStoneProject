package com.example.usersapi.service;


import com.example.usersapi.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService extends UserDetailsService {

    public String login (User user)throws Exception;

    public String createUser (User newUser)throws Exception;

    public Iterable<User> listUsers();

    public User getUser(String username);

    public HttpStatus deleteById(Long userId);

    public User findByUserId(Long userId);
}

