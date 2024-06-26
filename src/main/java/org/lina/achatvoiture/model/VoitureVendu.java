package org.lina.achatvoiture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.VoitureVenduDto;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
public class VoitureVendu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String firstName;
    private String lastName;
    private String email;
    private String dateBirth;
    private String address;
    private String city;
    private String state;
    private String postalCode;

    private String nameCard;
    private String cardNumber;
    private String expiryDate;
    private String cvcCVV;

    @OneToOne
    private Voiture voiture;

    public VoitureVenduDto toPannierDto() {
        return new VoitureVenduDto(
                id,
                firstName,
                lastName,
                email,
                dateBirth,
                address,
                city,
                state,
                postalCode,
                nameCard,
                cardNumber,
                expiryDate,
                cvcCVV,
                voiture.toVoitureDto()
        );
    }
}
