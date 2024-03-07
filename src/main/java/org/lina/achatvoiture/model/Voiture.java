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
    private int annee;
    private double prix;
    private double kilometrage;

    @Enumerated(EnumType.STRING)
    private ChoixCarburant carburant;
    @Enumerated(EnumType.STRING)
    private ChoixTransmission transmission;

    @Lob
    private String imageVoiture;

    public VoitureDto toVoitureDto() {
        return new VoitureDto(
                id,
                marque,
                model,
                annee,
                prix,
                kilometrage,
                carburant.toString(),
                transmission.toString(),
                imageVoiture
        );
    }


    public enum ChoixCarburant {
        essence,
        diesel,
        electrique
    }

    public enum ChoixTransmission {
        manuel,
        automatique
    }
}
