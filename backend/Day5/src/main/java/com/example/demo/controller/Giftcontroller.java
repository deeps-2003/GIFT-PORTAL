package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.GiftDTO;
import com.example.demo.service.Giftservice;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/gift")
public class Giftcontroller {
    private final Giftservice gift;

    @PostMapping("/addgift")
    public ResponseEntity<GiftDTO> createGift(@RequestBody GiftDTO entity) {
        GiftDTO saved = gift.createGift(entity);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<GiftDTO> getGiftById(@PathVariable("id") Long giftid) {
        GiftDTO u = gift.getGiftById(giftid);
        return ResponseEntity.ok(u);
    }

    @GetMapping
    public ResponseEntity<List<GiftDTO>> getAllGifts() {
        List<GiftDTO> us = gift.getAllGifts();
        return ResponseEntity.ok(us);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<GiftDTO> updateGift(@PathVariable("id") Long giftid, @RequestBody GiftDTO giftDTO) {
        GiftDTO updatedGift = gift.updateGift(giftid, giftDTO);
        return ResponseEntity.ok(updatedGift);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteGift(@PathVariable("id") Long giftid) {
        gift.deleteGift(giftid);
        return ResponseEntity.noContent().build();
    }

}
