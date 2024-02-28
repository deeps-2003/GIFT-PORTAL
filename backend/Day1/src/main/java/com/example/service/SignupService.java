package com.example.service;

import com.example.dto.SignupDto;

import java.util.List;

public interface SignupService {

    SignupDto createSignup(SignupDto signupDto);

    SignupDto getSignupById(Long id);

    List<SignupDto> getAllSignups();

    // You can add update and delete methods as needed

}
