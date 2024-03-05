package com.example.demo.service;

import java.util.List;

import com.example.demo.DTO.GiftDTO;

public interface Giftservice {
    GiftDTO createGift(GiftDTO us);
    GiftDTO getGiftById(Long giftid);
    List<GiftDTO> getAllGifts();
    GiftDTO updateGift(Long giftid, GiftDTO giftDTO);
    void deleteGift(Long giftid);
}
