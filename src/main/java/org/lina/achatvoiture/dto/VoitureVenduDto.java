package org.lina.achatvoiture.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.model.VoitureVendu;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoitureVenduDto {
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

    private VoitureDto voiture;

    public VoitureVendu toPannier() {
        return new VoitureVendu(
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
                voiture.toVoiture()
        );
    }
}
