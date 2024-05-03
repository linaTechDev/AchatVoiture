package org.lina.achatvoiture.controller;

import lombok.AllArgsConstructor;
import org.lina.achatvoiture.dto.PannierDto;
import org.lina.achatvoiture.service.PannierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/pannier")
@CrossOrigin(origins = "http://localhost:3000")
public class PannierController {
    private final PannierService pannierService;

    @GetMapping("/{id}")
    public ResponseEntity<PannierDto> getPannierById(@PathVariable("id") long id) {
        try {
            PannierDto pannierDto = pannierService.getPanier(id);
            return new ResponseEntity<>(pannierDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/voiture/{id}")
    public ResponseEntity<PannierDto> getPannierVoitureById(@PathVariable("id") long id) {
        try {
            PannierDto pannierDto = pannierService.getPanierVoiture(id);
            return new ResponseEntity<>(pannierDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<PannierDto> addPannier(@RequestBody PannierDto pannierDto) {
        try {
            PannierDto pannier = pannierService.addPanier(pannierDto);
            return new ResponseEntity<>(pannier, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(pannierDto);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
