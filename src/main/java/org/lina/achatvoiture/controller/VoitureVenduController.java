package org.lina.achatvoiture.controller;

import lombok.AllArgsConstructor;
import org.lina.achatvoiture.dto.VoitureVenduDto;
import org.lina.achatvoiture.service.VoitureVenduService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/pannier")
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureVenduController {
    private final VoitureVenduService voitureVenduService;

    @GetMapping("/{id}")
    public ResponseEntity<VoitureVenduDto> getPannierById(@PathVariable("id") long id) {
        try {
            VoitureVenduDto voitureVenduDto = voitureVenduService.getPanier(id);
            return new ResponseEntity<>(voitureVenduDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/voiture/{id}")
    public ResponseEntity<VoitureVenduDto> getPannierVoitureById(@PathVariable("id") long id) {
        try {
            VoitureVenduDto voitureVenduDto = voitureVenduService.getPanierVoiture(id);
            return new ResponseEntity<>(voitureVenduDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<VoitureVenduDto> addPannier(@RequestBody VoitureVenduDto voitureVenduDto) {
        try {
            VoitureVenduDto pannier = voitureVenduService.addPanier(voitureVenduDto);
            return new ResponseEntity<>(pannier, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(voitureVenduDto);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
