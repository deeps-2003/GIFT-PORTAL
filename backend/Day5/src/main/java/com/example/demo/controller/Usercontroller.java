package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.AuthRequest;
import com.example.demo.DTO.UserDTO;
import com.example.demo.model.User;
import com.example.demo.service.JwtService;
import com.example.demo.service.Userservice;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class Usercontroller {
    private Userservice user;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/adduser")
    public ResponseEntity<UserDTO> postMethodName(@RequestBody User entity) {
        UserDTO u = user.createUser(entity);
        return ResponseEntity.ok(u);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<UserDTO> getMethodName(@PathVariable("id") Long userid) {
        UserDTO u=user.getUserById(userid);
        return ResponseEntity.ok(u);
    }
    
    @GetMapping
    public ResponseEntity<List<UserDTO>> getMethodName() {
        List<UserDTO> us=user.getAllUsers();
        return ResponseEntity.ok(us);
    }
    
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}