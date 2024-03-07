package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.PannierDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Pannier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne
    private Voiture voiture;

    public PannierDto toPannierDto() {
        return new PannierDto(
                id,
                voiture.toVoitureDto() //voiture.getId()
        );
    }
}
