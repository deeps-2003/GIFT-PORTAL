package com.example.demo.enumerated.mapper;

import com.example.demo.DTO.UserDTO;
import com.example.demo.model.User;

public class Usermap {
    public static UserDTO maptoUserDTO(User u){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(u.getId());
        userDTO.setUsername(u.getUsername());
        userDTO.setEmail(u.getEmail());
        userDTO.setPassword(u.getPassword());
        userDTO.setRole(u.getRole());
        // Assuming you have a method to map Customer to CustomerDTO, you can include it here
        // userDTO.setCustomerDTO(Customermap.maptoCustDTO(u.getCustomer()));
        return userDTO;
    }
    public static User maptoUser(UserDTO u){
        User user = new User();
        user.setId(u.getId());
        user.setUsername(u.getUsername());
        user.setEmail(u.getEmail());
        user.setPassword(u.getPassword());
        user.setRole(u.getRole());
        // Assuming you have a method to map CustomerDTO to Customer, you can include it here
        // user.setCustomer(Customermap.maptoCust(u.getCustomerDTO()));
        return user;
    }

}
//entity->controller->mapper->service