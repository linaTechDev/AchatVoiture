package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.VoitureDto;
import org.lina.achatvoiture.model.Voiture;
import org.lina.achatvoiture.repository.VoitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class VoitureService {

    @Autowired
    private VoitureRepository voitureRepository;

    @Transactional
    public VoitureDto getVoitureByMarque(String marque) {
        Voiture voiture = voitureRepository.findVoitureByMarque(marque);
        if (voiture == null) {
            return null;
        }
        return voiture.toVoitureDto();
    }

    @Transactional
    public VoitureDto getVoitureById(long id) {
        return voitureRepository.findVoitureById(id)
                .orElseThrow(() -> new RuntimeException("Voiture non trouvée pour l'ID : " + id)).toVoitureDto();
    }

    @Transactional
    public List<VoitureDto> getAllVoitures() {
        List<Voiture> voitures = voitureRepository.findAll();
        List<VoitureDto> voitureDtos = new ArrayList<>();

        for (Voiture voiture : voitures) {
            voitureDtos.add(voiture.toVoitureDto());
        }

        return voitureDtos;
    }

    @Transactional
    public VoitureDto saveVoiture(VoitureDto voitureDto) {
        Voiture voiture = voitureDto.toVoiture();
        return voitureRepository.save(voiture).toVoitureDto();
    }

    @Transactional
    public VoitureDto updateVoiture(VoitureDto voitureDto) {
        Voiture voiture = voitureDto.toVoiture();

        voitureRepository.updateVoitureById(
                voiture.getId(),
                !voiture.isFavori()
        );
        return voiture.toVoitureDto();
    }
}