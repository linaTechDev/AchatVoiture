package org.lina.achatvoiture.controller;

import lombok.AllArgsConstructor;
import org.lina.achatvoiture.dto.MarqueDto;
import org.lina.achatvoiture.service.MarqueService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/marques")
@CrossOrigin(origins = "http://localhost:3000")
public class MarqueController {
    private final MarqueService marqueService;

    @GetMapping("/")
    public ResponseEntity<List<MarqueDto>> getAllMarques() {
        List<MarqueDto> marqueDtos = marqueService.getAllMarques();
        return new ResponseEntity<>(marqueDtos, HttpStatus.OK);
    }
}
