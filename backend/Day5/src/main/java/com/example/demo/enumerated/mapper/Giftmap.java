package com.example.demo.enumerated.mapper;

import com.example.demo.DTO.GiftDTO;
import com.example.demo.model.Gift;

public class Giftmap {

    public static GiftDTO mapToGiftDTO(Gift gift) {
        GiftDTO giftDTO = new GiftDTO();
        giftDTO.setGiftid(gift.getGiftid());
        giftDTO.setName(gift.getName());
        giftDTO.setDetails(gift.getDetails());
        giftDTO.setPrice(gift.getPrice());
        // Assuming you have methods to map Theme to ThemeDTO, include them here
        // giftDTO.setThemesDTO(ThemeMap.mapToThemesDTO(gift.getThemes()));
        return giftDTO;
    }

    public static Gift mapToGift(GiftDTO giftDTO) {
        Gift gift = new Gift();
        gift.setGiftid(giftDTO.getGiftid());
        gift.setName(giftDTO.getName());
        gift.setDetails(giftDTO.getDetails());
        gift.setPrice(giftDTO.getPrice());
        // Assuming you have methods to map ThemeDTO to Theme, include them here
        // gift.setThemes(ThemeMap.mapToThemes(giftDTO.getThemesDTO()));
        return gift;
    }
}
