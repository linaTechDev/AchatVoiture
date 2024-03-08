package org.lina.achatvoiture.service.creationBD;

import org.lina.achatvoiture.dto.VoitureDto;
import org.lina.achatvoiture.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class VoituresDB implements CommandLineRunner {
    @Autowired
    private VoitureService voitureService;

    @Override
    public void run(String... args) throws IOException {
        System.out.println("Création...");
    }
}
