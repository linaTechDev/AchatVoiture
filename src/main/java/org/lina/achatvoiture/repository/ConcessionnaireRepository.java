package org.lina.achatvoiture.repository;

import org.lina.achatvoiture.model.Concessionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConcessionnaireRepository extends JpaRepository<Concessionnaire, Long> {
}
