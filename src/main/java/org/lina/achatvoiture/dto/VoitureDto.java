package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.Voiture;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoitureDto {
    private long id;
    private String marque;
    private String model;
    private String detail;
    private int annee;
    private double prix;
    private double kilometrage;
    private String rouesMotrice;
    private int nbrCylindre;
    private String categorieTailleVoiture;
    private String carburant;
    private String transmission;
    private String nbrVitesseTransmission;
    private String imageVoiture;
    private boolean isFavori;

    public Voiture toVoiture() {
        return new Voiture(
                id,
                marque,
                model,
                detail,
                annee,
                prix,
                kilometrage,
                rouesMotrice,
                nbrCylindre,
                categorieTailleVoiture,
                Voiture.ChoixCarburant.valueOf(carburant),
                Voiture.ChoixTransmission.valueOf(transmission),
                nbrVitesseTransmission,
                imageVoiture,
                isFavori
        );
    }
}
