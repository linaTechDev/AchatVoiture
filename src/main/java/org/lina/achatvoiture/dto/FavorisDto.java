package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.Favoris;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavorisDto {
    private long id;
    private VoitureDto voitureDto;

    public Favoris toFavoris() {
        return new Favoris(
                id,
                voitureDto.toVoiture()
        );
    }
}
