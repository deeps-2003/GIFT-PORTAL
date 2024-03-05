package com.example.demo.enumerated.mapper;

import com.example.demo.DTO.CustomerDTO;
import com.example.demo.model.Customer;

public class Customermap {
    public static CustomerDTO maptoCustDTO(Customer c){
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setId(c.getId());
        customerDTO.setCustomer(c.getCustomer());
        customerDTO.setAddress(c.getAddress());
        // Assuming you have a method to map User to UserDTO, you can include it here
        // customerDTO.setUserDTO(Usermap.maptoUserDTO(c.getUser()));
        return customerDTO;
    }
    public static Customer maptoCust(CustomerDTO c){
        Customer customer = new Customer();
        customer.setId(c.getId());
        customer.setCustomer(c.getCustomer());
        customer.setAddress(c.getAddress());
        // Assuming you have a method to map UserDTO to User, you can include it here
        // customer.setUser(Usermap.maptoUser(c.getUserDTO()));
        return customer;
    }
}
