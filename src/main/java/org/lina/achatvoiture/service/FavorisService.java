package org.lina.achatvoiture.service;

import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.lina.achatvoiture.dto.FavorisDto;
import org.lina.achatvoiture.dto.VoitureDto;
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
    public FavorisDto getFavoris(long id) {
        return favorisRepository.findFavorisById(id)
                .orElseThrow(() -> new RuntimeException("Voiture favoris non trouvée pour l'ID : " + id)).toFavorisDto();
    }

    @Transactional
    public VoitureDto getVoitureFavoris(long id) {
        return getFavoris(id).getVoitureDto();
    }

    @Transactional
    public FavorisDto getFavorisVoiture(long id) {
        return favorisRepository.findFavorisByVoitureId(id)
                .orElseThrow(() -> new RuntimeException("Voiture favoris non trouvée pour l'ID : " + id)).toFavorisDto();
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
