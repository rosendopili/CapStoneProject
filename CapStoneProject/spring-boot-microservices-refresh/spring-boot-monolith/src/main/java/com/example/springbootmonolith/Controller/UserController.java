package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Model.JwtResponse;
import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Model.User;
import com.example.springbootmonolith.Repository.UserRepository;
import com.example.springbootmonolith.Service.UserService;
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

    @GetMapping("/users/list")
    public Iterable<User> listUsers(){
        return userService.listUsers();
    }

    @GetMapping("/users/{username}/stats")
    public Iterable<Stats> listUserStats(@PathVariable String username){
        return userService.listUserStats(username); 
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser) throws Exception {
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        return userService.deleteById(userId);
    }

}