package org.lina.achatvoiture.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.lina.achatvoiture.controller.MarqueController;
import org.lina.achatvoiture.dto.MarqueDto;
import org.lina.achatvoiture.model.Marque;
import org.lina.achatvoiture.repository.MarqueRepository;
import org.lina.achatvoiture.service.MarqueService;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(MarqueController.class)
public class MarqueControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Mock
    private MarqueRepository marqueRepository;

    @MockBean
    private MarqueService marqueService;



    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testGetAllMarques() throws Exception {
        ArrayList<Marque> marques = new ArrayList<>();
        when(marqueRepository.findAll()).thenReturn(marques);
        List<MarqueDto> actualMarques = marqueService.getAllMarques();
        assertTrue(actualMarques.isEmpty());
        verify(marqueRepository).findAll();
    }
}
