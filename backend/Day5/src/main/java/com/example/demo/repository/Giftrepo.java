package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Gift;

public interface Giftrepo extends JpaRepository<Gift,Long>{
    
}
