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
    private int annee;
    private double prix;
    private double kilometrage;
    private String carburant;
    private String transmission;
    private String imageVoiture;

    public Voiture toVoiture() {
        return new Voiture(
                id,
                marque,
                model,
                annee,
                prix,
                kilometrage,
                Voiture.ChoixCarburant.valueOf(carburant),
                Voiture.ChoixTransmission.valueOf(transmission),
                imageVoiture
        );
    }
}
