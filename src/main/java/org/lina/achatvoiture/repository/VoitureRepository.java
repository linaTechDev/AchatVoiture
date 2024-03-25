package org.lina.achatvoiture.repository;

import jakarta.transaction.Transactional;
import org.lina.achatvoiture.model.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VoitureRepository extends JpaRepository<Voiture, Long> {
    @Query("SELECT v FROM Voiture v WHERE v.marque = ?1")
    Voiture findVoitureByMarque(String marque);

    @Modifying
    @Transactional
    @Query("UPDATE Voiture " +
            "SET marque = ?2, " +
            "model = ?3, " +
            "detail = ?4," +
            "annee = ?5, " +
            "prix = ?6, " +
            "kilometrage = ?7, " +
            "rouesMotrice = ?8," +
            "nbrCylindre = ?9," +
            "categorieTailleVoiture = ?10," +
            "carburant = ?11, " +
            "transmission = ?12, " +
            "nbrVitesseTransmission = ?13," +
            "imageVoiture = ?14 WHERE id = ?1")
    void updateVoitureById(
            long id,
            String marque,
            String model,
            String detail,
            int annee,
            double prix,
            double kilometrage,
            String rouesMotrice,
            int nbrCylindre,
            String categorieTailleVoiture,
            Voiture.ChoixCarburant carburant,
            Voiture.ChoixTransmission transmission,
            String nbrVitesseTransmission,
            String imageVoiture
    );
}
