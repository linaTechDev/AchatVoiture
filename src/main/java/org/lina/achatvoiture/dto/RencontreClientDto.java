package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.RencontreClient;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RencontreClientDto {
    private long id;
    private String nomClient;
    private String emailClient;
    private String dateHeure;
    private String commentaire;
    private ConcessionnaireDto concessionnaire; //long idConcessionnaire

    public RencontreClient toRencontreClient() {
        return new RencontreClient(
                id,
                nomClient,
                emailClient,
                dateHeure,
                commentaire,
                concessionnaire.toConcessionnaire() //concessionnaire.getId()
        );
    }
}
