package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Signup;

@Repository
public interface SignupRepository extends JpaRepository<Signup, Long> {
    // You can add custom query methods if needed
}

