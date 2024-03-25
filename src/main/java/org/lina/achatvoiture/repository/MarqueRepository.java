package org.lina.achatvoiture.repository;

import jakarta.transaction.Transactional;
import org.lina.achatvoiture.model.Marque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MarqueRepository extends JpaRepository<Marque, Long> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO Marque (id, marque) select id,marque " +
            "from ( SELECT distinct voiture.marque,rank() over (order by Voiture.id asc) as id " +
            "from Voiture) tmp", nativeQuery = true)
    int createMarques();
}
