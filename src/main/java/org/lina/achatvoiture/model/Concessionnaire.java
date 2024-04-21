package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.ConcessionnaireDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Concessionnaire {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nomConcessionnaire;
    private String adresse;
    private String ville;
    private String pays;

    @ManyToOne
    private Marque marque;

    public ConcessionnaireDto toConcessionnaireDto() {
        return new ConcessionnaireDto(
                id,
                nomConcessionnaire,
                adresse,
                ville,
                pays,
                marque.toMarqueDto() // à changer pour : marque.getId()
        );
    }
}
