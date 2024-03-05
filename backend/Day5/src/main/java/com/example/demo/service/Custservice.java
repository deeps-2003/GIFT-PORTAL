package com.example.demo.service;

import java.util.List;

import com.example.demo.DTO.CustomerDTO;

public interface Custservice {
   CustomerDTO createcust(CustomerDTO c);
   CustomerDTO getCustById(Long custid);
   List<CustomerDTO> getAllCust();
} 