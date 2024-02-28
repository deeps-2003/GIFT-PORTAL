package com.example.service.impl;

import com.example.dto.SignupDto;
import com.example.entity.Signup;
import com.example.exception.ResourceNotFoundException;
import com.example.mapper.SignupMapper;
import com.example.repository.SignupRepository;
import com.example.service.SignupService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SignupServiceImpl implements SignupService {

    private final SignupRepository signupRepository;
    private final SignupMapper signupMapper;

    @Override
    public SignupDto createSignup(SignupDto signupDto) {
        Signup signup = signupMapper.toEntity(signupDto);
        Signup savedSignup = signupRepository.save(signup);
        return signupMapper.toDto(savedSignup);
    }

    @Override
    public SignupDto getSignupById(Long id) {
        Signup signup = signupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Signup not found with id: " + id));

        return signupMapper.toDto(signup);
    }

    @Override
    public List<SignupDto> getAllSignups() {
        List<Signup> signups = signupRepository.findAll();

        return signups.stream()
                .map(signupMapper::toDto)
                .collect(Collectors.toList());
    }

    // You can add update and delete methods as needed

}
