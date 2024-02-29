package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.SignupDto;

public interface SignupService {

    SignupDto createSignup(SignupDto signupDto);

    SignupDto getSignupById(Long id);

    List<SignupDto> getAllSignups();

    // You can add update and delete methods as needed

}

