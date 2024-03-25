package org.lina.achatvoiture.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.lina.achatvoiture.controller.MarqueController;
import org.lina.achatvoiture.dto.MarqueDto;
import org.lina.achatvoiture.service.MarqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(MarqueController.class)
public class MarqueControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MarqueService marqueService;

    @Autowired
    private ObjectMapper objectMapper;

    private List<MarqueDto> marqueDtos;

    @Before
    public void setup() {
        marqueDtos = Arrays.asList(
                new MarqueDto(
                        1L,
                        "BMW"
                ),
                new MarqueDto(
                        2L,
                        "Ford"
                ),
                new MarqueDto(
                        3L,
                        "Audi"
                )
        );
    }

    @Test
    public void testGetAllMarques() throws Exception {
        when(marqueService.getAllMarques())
                .thenReturn(marqueDtos);

        mockMvc.perform(get("/api/marques/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].marque", is("BMW")));
    }
}
