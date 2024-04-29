package org.lina.achatvoiture.repository;

import org.lina.achatvoiture.model.Favoris;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {
    Optional<Favoris> findFavorisById(long id);

    @Query("SELECT f FROM Favoris f WHERE f.voiture.id = ?1")
    Optional<Favoris> findFavorisByVoitureId(long id);
}