package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.RencontreClientDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class RencontreClient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nomClient;
    private String emailClient;
    private String dateHeure;
    private String commentaire;

    @ManyToOne
    private Concessionnaire concessionnaire;

    public RencontreClientDto toRencontreClientDto() {
        return new RencontreClientDto(
                id,
                nomClient,
                emailClient,
                dateHeure,
                commentaire,
                concessionnaire.toConcessionnaireDto()//concessionnaire.getId()
        );
    }
}
