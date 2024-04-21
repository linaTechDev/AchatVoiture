package org.lina.achatvoiture.repository;

import org.lina.achatvoiture.model.Favoris;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {
    Optional<Favoris> findFavorisById(long id);
}