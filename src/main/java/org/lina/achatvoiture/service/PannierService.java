package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.PannierDto;
import org.lina.achatvoiture.model.Pannier;
import org.lina.achatvoiture.repository.PannierRepository;
import org.lina.achatvoiture.service.utils.GmailSenderNotification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class PannierService {

    @Autowired
    private PannierRepository pannierRepository;

    @Transactional
    public PannierDto addPanier(PannierDto pannierDto) {
        Pannier pannier = pannierDto.toPannier();

        return pannierRepository.save(pannier).toPannierDto();
    }

    @Transactional
    public PannierDto getPanier(long id) {
        return pannierRepository.findPannierById(id)
                .orElseThrow(() -> new RuntimeException("Le panier est non trouvé pour l'id : " + id)).toPannierDto();
    }

    @Transactional
    public PannierDto getPanierVoiture(long id) {
        return pannierRepository.getPannierVoitureById(id)
                .orElseThrow(() -> new RuntimeException("Le panier voiture est non trouvé pour l'id : " + id)).toPannierDto();
    }
}
