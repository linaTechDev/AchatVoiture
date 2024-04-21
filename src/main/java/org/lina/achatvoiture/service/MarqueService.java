package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.MarqueDto;
import org.lina.achatvoiture.model.Marque;
import org.lina.achatvoiture.repository.MarqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class MarqueService {
    @Autowired
    private MarqueRepository marqueRepository;

    @Transactional
    public void saveMarques() {
        marqueRepository.createMarques();
    }

    @Transactional
    public List<MarqueDto> getAllMarques() {
        List<Marque> marques = marqueRepository.findAll();
        List<MarqueDto> marqueDtos = new ArrayList<>();

        for (Marque marque : marques) {
            marqueDtos.add(marque.toMarqueDto());
        }

        return marqueDtos;
    }
}
