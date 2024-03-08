package org.lina.achatvoiture.service;

import lombok.NoArgsConstructor;
import org.lina.achatvoiture.repository.PannierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class PannierService {
    @Autowired
    private PannierRepository pannierRepository;
}
