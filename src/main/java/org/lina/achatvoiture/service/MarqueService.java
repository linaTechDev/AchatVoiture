package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.repository.MarqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class MarqueService {
    @Autowired
    private MarqueRepository marqueRepository;

    @Transactional
    public int saveMarques() {
        return marqueRepository.createMarques();
    }
}
