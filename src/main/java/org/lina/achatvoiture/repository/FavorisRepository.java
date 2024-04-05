package org.lina.achatvoiture.repository;

import jakarta.transaction.Transactional;
import org.lina.achatvoiture.model.Favoris;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Favoris WHERE id = ?1")
    void deleteFavorisById(long id);
}