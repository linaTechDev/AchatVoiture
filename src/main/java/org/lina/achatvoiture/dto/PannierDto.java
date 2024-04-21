package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.Pannier;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PannierDto {
    private long id;
    private VoitureDto voiture; //long idVoiture;

    public Pannier toPannier() {
        return new Pannier(
                id,
                voiture.toVoiture() //idVoiture
        );
    }
}
