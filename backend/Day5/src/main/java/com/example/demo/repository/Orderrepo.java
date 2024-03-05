package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Order;
public interface Orderrepo extends JpaRepository<Order,Long>{
    
}
