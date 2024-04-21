package org.lina.achatvoiture.controller;

import lombok.AllArgsConstructor;
import org.lina.achatvoiture.dto.FavorisDto;
import org.lina.achatvoiture.service.FavorisService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/favoris")
@CrossOrigin(origins = "http://localhost:3000")
public class FavorisController {
    private final FavorisService favorisService;

    @GetMapping("/")
    public ResponseEntity<List<FavorisDto>> getAllFavoris() {
        List<FavorisDto> favorisDtos = favorisService.getAllFavoris();
        return new ResponseEntity<>(favorisDtos, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<FavorisDto> addFavoris(@RequestBody FavorisDto favorisDto) {
        try {
            FavorisDto favoris = favorisService.addFavoris(favorisDto);
            return new ResponseEntity<>(favoris, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(favorisDto);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteFavoris(@PathVariable long id) {
        FavorisDto favorisDto = favorisService.getFavoris(id);
        favorisService.deleteFavoris(favorisDto);
    }

    @DeleteMapping
    public void deleteAllFavoris() {
        favorisService.deleteAllFavoris();
    }
}