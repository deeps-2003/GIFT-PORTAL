package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.DTO.ThemeDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Thememap;
import com.example.demo.model.Theme;
import com.example.demo.repository.Themerepo;
import com.example.demo.service.Themeservice;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ThemeImpl implements Themeservice {
    private Themerepo themeRepository;
    
    @Override
    public ThemeDTO createTheme(ThemeDTO themeDTO) {
        Theme theme = Thememap.mapToTheme(themeDTO);
        Theme saved = themeRepository.save(theme);
        return Thememap.mapToThemeDTO(saved);
    }
    
    @Override
    public ThemeDTO getThemeById(Long themeId) {
        Theme theme = themeRepository.findById(themeId)
                                     .orElseThrow(() -> new ResourceNotFoundException("Theme not found with id: " + themeId));
        return Thememap.mapToThemeDTO(theme);
    }
    
    @Override
    public List<ThemeDTO> getAllThemes() {
        List<Theme> themes = themeRepository.findAll();
        List<ThemeDTO> themeDTOs = new ArrayList<>();
        for (Theme theme : themes) {
            themeDTOs.add(Thememap.mapToThemeDTO(theme));
        }
        return themeDTOs;
    }
    
    @Override
    public ThemeDTO updateTheme(Long themeId, ThemeDTO themeDTO) {
        Theme theme = themeRepository.findById(themeId)
                                     .orElseThrow(() -> new ResourceNotFoundException("Theme not found with id: " + themeId));
        theme.setName(themeDTO.getName());
        theme.setDetails(themeDTO.getDetails());
        theme.setPrice(themeDTO.getPrice());
        Theme updatedTheme = themeRepository.save(theme);
        return Thememap.mapToThemeDTO(updatedTheme);
    }
    
    @Override
    public void deleteTheme(Long themeId) {
        Theme theme = themeRepository.findById(themeId)
                                     .orElseThrow(() -> new ResourceNotFoundException("Theme not found with id: " + themeId));
        themeRepository.delete(theme);
    }
}
