package com.example.controller;

import com.example.dto.SignupDto;
import com.example.service.SignupService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/signup")
public class SignupController {

    private final SignupService signupService;

    public SignupController(SignupService signupService) {
        this.signupService = signupService;
    }

    // Create Signup
    @PostMapping
    public ResponseEntity<SignupDto> createSignup(@RequestBody SignupDto signupDto) {
        SignupDto savedSignup = signupService.createSignup(signupDto);
        return new ResponseEntity<>(savedSignup, HttpStatus.CREATED);
    }

    // Get Signup by ID
    @GetMapping("/{id}")
    public ResponseEntity<SignupDto> getSignupById(@PathVariable("id") Long id) {
        SignupDto signupDto = signupService.getSignupById(id);
        return ResponseEntity.ok(signupDto);
    }

    // Get All Signups
    @GetMapping
    public ResponseEntity<List<SignupDto>> getAllSignups() {
        List<SignupDto> signups = signupService.getAllSignups();
        return ResponseEntity.ok(signups);
    }

    // Other CRUD operations can be added as needed

}
