package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="login")

public class Signup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable=false)
    private String name;

    @Column(name = "phonenumber",nullable = false)
    private String phonenumber;

    @Column(name = "dob",nullable = false)
    private int dob;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "pwd",nullable = false)
    private String pwd;

}
