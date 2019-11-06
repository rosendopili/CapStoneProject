package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Model.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService extends UserDetailsService {

    public String login (User user)throws Exception;

    public String createUser (User newUser)throws Exception;

    public Iterable<User> listUsers();

    public Iterable<Stats> listUserStats(String username);

    public User getUser(String username);

    public HttpStatus deleteById(Long userId);

    public User findByUserId(Long userId);
}
