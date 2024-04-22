package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.FavorisDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Favoris {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Voiture voiture;

    public FavorisDto toFavorisDto() {
        return new FavorisDto(
                id,
                voiture.toVoitureDto()
        );
    }
}
