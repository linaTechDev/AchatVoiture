package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.Favoris;
import org.lina.achatvoiture.model.Voiture;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavorisDto {
    private long id;
    private List<VoitureDto> voitureDtoList;

    public Favoris toFavoris() {
        List<Voiture> voitureList = new ArrayList<>();

        for(VoitureDto voitureDto : voitureDtoList) {
            voitureList.add(voitureDto.toVoiture());
        }

        return new Favoris(
                id,
                voitureList
        );
    }
}
