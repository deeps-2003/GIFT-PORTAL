package com.example.demo.enumerated.mapper;

import com.example.demo.DTO.ThemeDTO;
import com.example.demo.model.Theme;

public class Thememap {

    public static ThemeDTO mapToThemeDTO(Theme theme) {
        ThemeDTO themeDTO = new ThemeDTO();
        themeDTO.setThemeId(theme.getThemeId());
        themeDTO.setName(theme.getName());
        themeDTO.setDetails(theme.getDetails());
        themeDTO.setPrice(theme.getPrice());
        // Assuming you have a method to map Gift to GiftDTO, you can include it here
        // themeDTO.setGiftDTO(GiftMap.mapToGiftDTO(theme.getGift()));
        return themeDTO;
    }

    public static Theme mapToTheme(ThemeDTO themeDTO) {
        Theme theme = new Theme();
        theme.setThemeId(themeDTO.getThemeId());
        theme.setName(themeDTO.getName());
        theme.setDetails(themeDTO.getDetails());
        theme.setPrice(themeDTO.getPrice());
        // Assuming you have a method to map GiftDTO to Gift, you can include it here
        // theme.setGift(GiftMap.mapToGift(themeDTO.getGiftDTO()));
        return theme;
    }
}
