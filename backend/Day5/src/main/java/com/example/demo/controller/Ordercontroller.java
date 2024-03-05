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

import com.example.demo.DTO.OrderDTO;
import com.example.demo.service.Orderservice;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/order")
public class Ordercontroller {
    private Orderservice ord;

    @PostMapping("/addorder")
    public ResponseEntity<OrderDTO> postMethodName(@RequestBody OrderDTO entity) {
        OrderDTO saved=ord.createOrder(entity);
        return new ResponseEntity<>(saved,HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<OrderDTO> getMethodName(@PathVariable("id") Long ordid) {
        OrderDTO u=ord.getOrderById(ordid);
        return ResponseEntity.ok(u);
    }
    @GetMapping
    public ResponseEntity<List<OrderDTO>> getMethodName() {
        List<OrderDTO> us=ord.getAllOrders();
        return ResponseEntity.ok(us);
    }
}
