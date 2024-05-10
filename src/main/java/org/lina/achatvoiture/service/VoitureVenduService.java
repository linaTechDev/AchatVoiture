package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.VoitureVenduDto;
import org.lina.achatvoiture.model.VoitureVendu;
import org.lina.achatvoiture.repository.VoitureVenduRepository;
import org.lina.achatvoiture.service.utils.GmailSenderNotification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class VoitureVenduService {

    @Autowired
    private VoitureVenduRepository voitureVenduRepository;

    @Autowired
    GmailSenderNotification gmailSenderNotification;

    @Transactional
    public VoitureVenduDto addPanier(VoitureVenduDto voitureVenduDto) {
        VoitureVendu pannier = voitureVenduDto.toPannier();

        gmailSenderNotification.sendEmail(pannier.getEmail(),
                "Destinataire : " + pannier.getFirstName() + " " + pannier.getLastName() + "\n" +
                        " Voiture : \n" +
                        "   Marque / modèle : " + pannier.getVoiture().getMarque() + " " + pannier.getVoiture().getModel() + "\n" +
                        "   Détail : " + pannier.getVoiture().getDetail() + "\n" +
                        "   Année : " + pannier.getVoiture().getAnnee() + "\n" +
                        "   Kilométrage : " + pannier.getVoiture().getKilometrage() + "\n" +
                        "   Roues motrices : " + pannier.getVoiture().getRouesMotrice() + "\n" +
                        "   Nombre de cylindres : " + pannier.getVoiture().getNbrCylindre() + "\n" +
                        "   Catégorie / taille : " + pannier.getVoiture().getCategorieTailleVoiture() + "\n" +
                        "   Carburant : " + pannier.getVoiture().getCarburant() + "\n" +
                        "   Transmission : " + pannier.getVoiture().getTransmission() + "\n" +
                        "   Nombre de vitesses : " + pannier.getVoiture().getNbrVitesseTransmission() + "\n" +
                        "   Prix : " + pannier.getVoiture().getPrix() + " $ \n");

        return voitureVenduRepository.save(pannier).toPannierDto();
    }

    @Transactional
    public VoitureVenduDto getPanier(long id) {
        return voitureVenduRepository.findPannierById(id)
                .orElseThrow(() -> new RuntimeException("Le panier est non trouvé pour l'id : " + id)).toPannierDto();
    }

    @Transactional
    public VoitureVenduDto getPanierVoiture(long id) {
        return voitureVenduRepository.getPannierVoitureById(id)
                .orElseThrow(() -> new RuntimeException("Le panier voiture est non trouvé pour l'id : " + id)).toPannierDto();
    }
}
