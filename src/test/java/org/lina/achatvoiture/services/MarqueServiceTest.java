package org.lina.achatvoiture.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.lina.achatvoiture.dto.MarqueDto;
import org.lina.achatvoiture.model.Marque;
import org.lina.achatvoiture.repository.MarqueRepository;
import org.lina.achatvoiture.service.MarqueService;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ContextConfiguration(classes = {MarqueService.class})
@RunWith(SpringJUnit4ClassRunner.class)
@ExtendWith(MockitoExtension.class)
class MarqueServiceTest {
    @InjectMocks
    private MarqueService marqueService;

    @Mock
    private MarqueRepository marqueRepository;

    @Test
    public void testGetAllMarques() {
        ArrayList<Marque> marques = new ArrayList<>();
        when(marqueRepository.findAll()).thenReturn(marques);
        List<MarqueDto> actualMarques = marqueService.getAllMarques();
        assertTrue(actualMarques.isEmpty());
        verify(marqueRepository).findAll();
    }
}
