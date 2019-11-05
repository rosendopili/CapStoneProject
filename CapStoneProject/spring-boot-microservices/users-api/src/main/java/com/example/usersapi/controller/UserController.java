package com.example.usersapi.controller;

import com.example.usersapi.model.JwtResponse;
import com.example.usersapi.model.User;
import com.example.usersapi.repository.UserRepository;
import com.example.usersapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public User getUsers(String username){
        return userService.getUser(username);
    }

    @GetMapping("/list/users")
    public Iterable<User> listUsers(){
        return userService.listUsers();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser) throws Exception {
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    @DeleteMapping("/user/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        return userService.deleteById(userId);
    }

}

