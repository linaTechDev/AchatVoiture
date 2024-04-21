package org.lina.achatvoiture.repository;

import org.lina.achatvoiture.model.RencontreClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RencontreClientRepository extends JpaRepository<RencontreClient, Long> {
}
