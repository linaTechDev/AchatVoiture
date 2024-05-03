package org.lina.achatvoiture.repository;

import org.lina.achatvoiture.model.Pannier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PannierRepository extends JpaRepository<Pannier, Long> {
    Optional<Pannier> findPannierById(long id);

    @Query("SELECT p FROM Pannier p WHERE p.voiture.id = ?1")
    Optional<Pannier> getPannierVoitureById(long id);
}
