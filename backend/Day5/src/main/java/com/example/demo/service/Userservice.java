package com.example.demo.service;


import java.util.List;

import com.example.demo.DTO.UserDTO;
import com.example.demo.model.User;

public interface Userservice {
    UserDTO createUser(User us);
    UserDTO getUserById(Long userid);
    List<UserDTO> getAllUsers();
}
