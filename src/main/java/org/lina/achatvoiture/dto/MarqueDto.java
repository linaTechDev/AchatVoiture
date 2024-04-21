package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.Marque;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MarqueDto {
    private long id;
    private String marque;

    public Marque toMarque() {
        return new Marque(
                id,
                marque
        );
    }
}
