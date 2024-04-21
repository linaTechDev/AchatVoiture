package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.FavorisDto;
import org.lina.achatvoiture.dto.VoitureDto;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Favoris {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany
    private List<Voiture> voitureList;

    public FavorisDto toFavorisDto() {
        List<VoitureDto> voitureDtoList = new ArrayList<>();

        for(Voiture voiture : voitureList) {
            voitureDtoList.add(voiture.toVoitureDto());
        }

        return new FavorisDto(
                id,
                voitureDtoList
        );
    }
}
