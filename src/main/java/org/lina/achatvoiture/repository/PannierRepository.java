package org.lina.achatvoiture.repository;

import jakarta.transaction.Transactional;
import org.lina.achatvoiture.model.Pannier;
import org.lina.achatvoiture.model.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PannierRepository extends JpaRepository<Pannier, Long> {
    @Query("SELECT p FROM Pannier p WHERE p.voiture.id = ?1")
    Pannier getPannierVoitureById(long id);

    @Modifying
    @Transactional
    @Query("UPDATE Pannier SET voiture = ?2 WHERE id = ?1")
    void updatePannierVoitureById(long id, Voiture voiture);

    @Modifying
    @Transactional
    @Query("DELETE FROM Pannier WHERE id = ?1")
    void deletePannierById(long id);
}
