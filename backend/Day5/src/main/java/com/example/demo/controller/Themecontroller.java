package com.example.demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.DTO.ThemeDTO;
import com.example.demo.service.Themeservice;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/theme")
public class Themecontroller {
    private Themeservice th;

    @PostMapping
    public ResponseEntity<ThemeDTO> createTheme(@RequestBody ThemeDTO entity) {
        ThemeDTO saved = th.createTheme(entity);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<ThemeDTO> getThemeById(@PathVariable("id") Long themeid) {
        ThemeDTO u = th.getThemeById(themeid);
        return ResponseEntity.ok(u);
    }
    
    @GetMapping
    public ResponseEntity<List<ThemeDTO>> getAllThemes() {
        List<ThemeDTO> us = th.getAllThemes();
        return ResponseEntity.ok(us);
    }
    
    @PutMapping("{id}")
    public ResponseEntity<ThemeDTO> updateTheme(@PathVariable("id") Long themeId, @RequestBody ThemeDTO themeDTO) {
        ThemeDTO updatedTheme = th.updateTheme(themeId, themeDTO);
        return ResponseEntity.ok(updatedTheme);
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTheme(@PathVariable("id") Long themeId) {
        th.deleteTheme(themeId);
        return ResponseEntity.ok("Theme with ID " + themeId + " has been deleted successfully.");
    }
}
