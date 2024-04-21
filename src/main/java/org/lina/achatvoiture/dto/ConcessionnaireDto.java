package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.Concessionnaire;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConcessionnaireDto {
    private long id;
    private String nomConcessionnaire;
    private String adresse;
    private String ville;
    private String pays;
    private MarqueDto idMarque; //a changer pour long quand j'aurai fait le service

    public Concessionnaire toConcessionnaire() {
        //ajout recherche marque by id
        return new Concessionnaire(
                id,
                nomConcessionnaire,
                adresse,
                ville,
                pays,
                idMarque.toMarque() //mettre le resultat de la recherche
        );
    }
}
