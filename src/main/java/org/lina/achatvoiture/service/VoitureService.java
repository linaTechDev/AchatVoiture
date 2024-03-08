package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.VoitureDto;
import org.lina.achatvoiture.model.Voiture;
import org.lina.achatvoiture.repository.VoitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public VoitureDto saveVoiture(VoitureDto voitureDto) {
        Voiture voiture = voitureDto.toVoiture();
        return voitureRepository.save(voiture).toVoitureDto();
    }

    @Transactional
    public VoitureDto updateVoiture(VoitureDto voitureDto) {
        Voiture voiture = voitureDto.toVoiture();

        voitureRepository.updateVoitureById(
                voiture.getId(),
                voiture.getMarque(),
                voiture.getModel(),
                voiture.getAnnee(),
                voiture.getPrix(),
                voiture.getKilometrage(),
                voiture.getCarburant(),
                voiture.getTransmission(),
                voiture.getImageVoiture()
        );
        return voiture.toVoitureDto();
    }
}