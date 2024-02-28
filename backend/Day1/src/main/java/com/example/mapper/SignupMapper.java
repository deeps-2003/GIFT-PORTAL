package com.example.mapper;

import com.example.dto.SignupDto;
import com.example.entity.Signup;
import org.springframework.stereotype.Component;

@Component
public class SignupMapper {

    public SignupDto toDto(Signup signup) {
        SignupDto signupDto = new SignupDto();
        signupDto.setId(signup.getId());
        signupDto.setName(signup.getName());
        signupDto.setPhonenumber(signup.getPhonenumber());
        signupDto.setDob(signup.getDob());
        signupDto.setEmail(signup.getEmail());
        signupDto.setPwd(signup.getPwd());
        return signupDto;
    }

    public Signup toEntity(SignupDto signupDto) {
        Signup signup = new Signup();
        signup.setId(signupDto.getId());
        signup.setName(signupDto.getName());
        signup.setPhonenumber(signupDto.getPhonenumber());
        signup.setDob(signupDto.getDob());
        signup.setEmail(signupDto.getEmail());
        signup.setPwd(signupDto.getPwd());
        return signup;
    }
}
