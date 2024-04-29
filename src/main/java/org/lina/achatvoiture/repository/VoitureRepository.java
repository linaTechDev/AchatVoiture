package org.lina.achatvoiture.repository;

import jakarta.transaction.Transactional;
import org.lina.achatvoiture.model.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoitureRepository extends JpaRepository<Voiture, Long> {
    @Query("SELECT v FROM Voiture v WHERE v.marque = ?1")
    Voiture findVoitureByMarque(String marque);

    Optional<Voiture> findVoitureById(long id);

    @Modifying
    @Transactional
    @Query("UPDATE Voiture SET isFavori = ?2 WHERE id = ?1")
    void updateVoitureById(
            long id,
            boolean isFavori
    );
}
