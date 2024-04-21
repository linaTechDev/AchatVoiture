package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.FavorisDto;
import org.lina.achatvoiture.model.Favoris;
import org.lina.achatvoiture.repository.FavorisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
public class FavorisService {

    @Autowired
    private FavorisRepository favorisRepository;

    @Transactional
    public FavorisDto addFavoris(FavorisDto favorisDto) {
        Favoris favoris = favorisDto.toFavoris();

        return favorisRepository.save(favoris).toFavorisDto();
    }

    @Transactional
    public List<FavorisDto> getAllFavoris() {
        List<Favoris> favorisList = favorisRepository.findAll();
        List<FavorisDto> favorisDtoList = new ArrayList<>();

        for (Favoris favoris : favorisList) {
            favorisDtoList.add(favoris.toFavorisDto());
        }

        return favorisDtoList;
    }

    public void deleteFavoris(FavorisDto favorisDto) {
        favorisRepository.delete(favorisDto.toFavoris());
    }

    public void deleteAllFavoris() {
        favorisRepository.deleteAll();
    }
}
