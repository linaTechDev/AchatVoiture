package org.lina.achatvoiture.controller;

import lombok.AllArgsConstructor;
import org.lina.achatvoiture.dto.VoitureDto;
import org.lina.achatvoiture.service.VoitureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/voitures")
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {
    private final VoitureService voitureService;

    @GetMapping("/")
    public ResponseEntity<List<VoitureDto>> getAllVoitures() {
        List<VoitureDto> voitureDtos = voitureService.getAllVoitures();
        return new ResponseEntity<>(voitureDtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VoitureDto> getVoitureById(@PathVariable("id") long id) {
        try {
            VoitureDto voitureDto = voitureService.getVoitureById(id);
            return new ResponseEntity<>(voitureDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{marque}")
    public ResponseEntity<VoitureDto> getVoitureByMarque(@PathVariable String marque) {
        try {
            VoitureDto voitureDto = voitureService.getVoitureByMarque(marque);
            return ResponseEntity.ok(voitureDto);
        } catch (Exception e) {
            System.out.println(marque);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<VoitureDto> createVoiture(@RequestBody VoitureDto voitureDto) {
        try {
            VoitureDto voiture = voitureService.saveVoiture(voitureDto);
            return new ResponseEntity<>(voiture, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(voitureDto);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<VoitureDto> updateVoiture(@RequestBody VoitureDto voitureDto) {
        try {
            VoitureDto voiture = voitureService.updateVoiture(voitureDto);
            return ResponseEntity.ok(voiture);
        } catch (Exception e) {
            System.out.println(voitureDto);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
