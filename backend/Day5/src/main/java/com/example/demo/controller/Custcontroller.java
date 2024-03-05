package com.example.demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.CustomerDTO;
import com.example.demo.service.Custservice;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cust")
public class Custcontroller {
    private Custservice cust;

    @PostMapping("/addcust")
    public ResponseEntity<CustomerDTO> postMethodName(@RequestBody CustomerDTO entity) {
        CustomerDTO saved=cust.createcust(entity);
        return new ResponseEntity<>(saved,HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<CustomerDTO> getMethodName(@PathVariable("id") Long userid) {
        CustomerDTO u=cust.getCustById(userid);
        return ResponseEntity.ok(u);
    }
    @GetMapping
    public ResponseEntity<List<CustomerDTO>> getMethodName() {
        List<CustomerDTO> us=cust.getAllCust();
        return ResponseEntity.ok(us);
    }
}
