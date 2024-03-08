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
            "annee = ?4, " +
            "prix = ?5, " +
            "kilometrage = ?6, " +
            "carburant = ?7, " +
            "transmission = ?8, " +
            "imageVoiture = ?9 WHERE id = ?1")
    void updateVoitureById(
            long id,
            String marque,
            String model,
            int annee,
            double prix,
            double kilometrage,
            Voiture.ChoixCarburant carburant,
            Voiture.ChoixTransmission transmission,
            String imageVoiture
    );
}
