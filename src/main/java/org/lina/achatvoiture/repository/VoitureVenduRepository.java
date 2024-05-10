package org.lina.achatvoiture.repository;

import org.lina.achatvoiture.model.VoitureVendu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoitureVenduRepository extends JpaRepository<VoitureVendu, Long> {
    Optional<VoitureVendu> findPannierById(long id);

    @Query("SELECT p FROM VoitureVendu p WHERE p.voiture.id = ?1")
    Optional<VoitureVendu> getPannierVoitureById(long id);
}
