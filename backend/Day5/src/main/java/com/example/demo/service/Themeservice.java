package com.example.demo.service;

import java.util.List;
import com.example.demo.DTO.ThemeDTO;

public interface Themeservice {
    ThemeDTO createTheme(ThemeDTO themeDTO);
    ThemeDTO getThemeById(Long themeId);
    List<ThemeDTO> getAllThemes();
    ThemeDTO updateTheme(Long themeId, ThemeDTO themeDTO);
    void deleteTheme(Long themeId);
}
