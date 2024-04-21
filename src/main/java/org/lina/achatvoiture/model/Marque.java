package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.MarqueDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Marque {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String marque;

    public MarqueDto toMarqueDto() {
        return new MarqueDto(
                id,
                marque
        );
    }
}
