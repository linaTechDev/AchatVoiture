package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.VoitureDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @Enumerated(EnumType.STRING)
    private ChoixCarburant carburant;
    @Enumerated(EnumType.STRING)
    private ChoixTransmission transmission;
    private String nbrVitesseTransmission;

    @Lob
    private String imageVoiture;

    public VoitureDto toVoitureDto() {
        return new VoitureDto(
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
                carburant.toString(),
                transmission.toString(),
                nbrVitesseTransmission,
                imageVoiture
        );
    }


    public enum ChoixCarburant {
        essenceRegulier,
        essenceMoyen,
        essencePremium,
        E85,
        CNG,
        diesel,
        electrique,
        inconnu
    }

    public enum ChoixTransmission {
        manuel,
        automatique,
        inconnu
    }
}
